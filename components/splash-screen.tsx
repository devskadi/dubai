"use client"

import { useState, useEffect, useRef, useCallback } from "react"

/**
 * SplashScreen — Grid Reveal splash overlay
 * Renders as a full-viewport overlay of tiles that disappear to reveal
 * the actual page underneath, then unmounts itself once the reveal finishes.
 */

type RevealPattern =
    | "random"
    | "left-to-right"
    | "right-to-left"
    | "top-to-bottom"
    | "bottom-to-top"
    | "center-out"
    | "edges-in"
    | "diagonal"
    | "diagonal-reverse"

interface SplashScreenProps {
    columns?: number
    rows?: number
    cellColor?: string
    cellDelay?: number
    revealPattern?: RevealPattern

    autoPlay?: boolean
    autoPlayDelay?: number

    /** Called once the last cell has finished its reveal transition */
    onComplete?: () => void
}

export default function SplashScreen({
    columns = 6,
    rows = 5,
    cellColor = "#080706",
    cellDelay = 55,
    revealPattern = "diagonal",

    autoPlay = true,
    autoPlayDelay = 300,

    onComplete,
}: SplashScreenProps) {
    const [cellStates, setCellStates] = useState<boolean[]>([])
    const [visible, setVisible] = useState(true)
    const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

    const clearAll = () => {
        timeoutsRef.current.forEach(clearTimeout)
        timeoutsRef.current = []
    }

    const buildOrder = useCallback(
        (total: number) => {
            const idx = Array.from({ length: total }, (_, i) => i)

            if (revealPattern === "random")
                return [...idx].sort(() => Math.random() - 0.5)

            if (revealPattern === "left-to-right") return idx

            if (revealPattern === "right-to-left") return [...idx].reverse()

            if (revealPattern === "top-to-bottom")
                return [...idx].sort(
                    (a, b) => Math.floor(a / columns) - Math.floor(b / columns)
                )

            if (revealPattern === "bottom-to-top")
                return [...idx].sort(
                    (a, b) => Math.floor(b / columns) - Math.floor(a / columns)
                )

            if (revealPattern === "center-out") {
                const cx = (columns - 1) / 2,
                    cy = (rows - 1) / 2
                return [...idx].sort((a, b) => {
                    const da = Math.hypot(
                        (a % columns) - cx,
                        Math.floor(a / columns) - cy
                    )
                    const db = Math.hypot(
                        (b % columns) - cx,
                        Math.floor(b / columns) - cy
                    )
                    return da - db
                })
            }

            if (revealPattern === "edges-in") {
                const cx = (columns - 1) / 2,
                    cy = (rows - 1) / 2
                return [...idx].sort((a, b) => {
                    const da = Math.hypot(
                        (a % columns) - cx,
                        Math.floor(a / columns) - cy
                    )
                    const db = Math.hypot(
                        (b % columns) - cx,
                        Math.floor(b / columns) - cy
                    )
                    return db - da
                })
            }

            if (revealPattern === "diagonal")
                return [...idx].sort(
                    (a, b) =>
                        Math.floor(a / columns) +
                        (a % columns) -
                        (Math.floor(b / columns) + (b % columns))
                )

            if (revealPattern === "diagonal-reverse")
                return [...idx].sort(
                    (a, b) =>
                        Math.floor(b / columns) +
                        (b % columns) -
                        (Math.floor(a / columns) + (a % columns))
                )

            return [...idx].sort(() => Math.random() - 0.5)
        },
        [columns, rows, revealPattern]
    )

    const play = useCallback(() => {
        clearAll()
        const total = columns * rows
        setCellStates(Array(total).fill(false))

        const order = buildOrder(total)
        const startTimer = setTimeout(() => {
            order.forEach((cellIdx, i) => {
                const tid = setTimeout(() => {
                    setCellStates((prev) => {
                        const next = [...prev]
                        next[cellIdx] = true
                        return next
                    })
                }, i * cellDelay)
                timeoutsRef.current.push(tid)
            })

            // Fire once the last cell has kicked off + its fade transition finishes
            const totalDuration = order.length * cellDelay + 420 // 420ms matches the CSS transition below
            const doneTimer = setTimeout(() => {
                onComplete?.()
                setVisible(false)
            }, totalDuration)
            timeoutsRef.current.push(doneTimer)
        }, autoPlayDelay)
        timeoutsRef.current.push(startTimer)
    }, [columns, rows, cellDelay, autoPlayDelay, buildOrder, onComplete])

    useEffect(() => {
        if (autoPlay) play()
        return clearAll
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [columns, rows, cellDelay, revealPattern, autoPlay, autoPlayDelay])

    // Lock page scroll while the splash is up
    useEffect(() => {
        if (visible) {
            const original = document.body.style.overflow
            document.body.style.overflow = "hidden"
            return () => {
                document.body.style.overflow = original
            }
        }
    }, [visible])

    if (!visible) return null

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                zIndex: 999,
                pointerEvents: "none",
                display: "grid",
                gridTemplateColumns: `repeat(${columns}, 1fr)`,
                gridTemplateRows: `repeat(${rows}, 1fr)`,
            }}
        >
            {cellStates.map((gone, i) => (
                <div
                    key={i}
                    style={{
                        background: cellColor,
                        opacity: gone ? 0 : 1,
                        transition: "opacity 0.42s ease",
                    }}
                />
            ))}
        </div>
    )
}