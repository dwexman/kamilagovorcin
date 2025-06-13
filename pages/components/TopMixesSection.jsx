import { useState, useEffect } from 'react'
import styles from './TopMixesSection.module.css'

const mixes = [
    { id: 1, title: 'DGTL Santiago 2024', url: 'https://soundcloud.com/kamila-govorcind/dgtl-santiago-2024' },
    { id: 2, title: 'TECHNO MIX @ SALA METRÓNOMO 2024', url: 'https://soundcloud.com/kamila-govorcind/set-para-low-profile-society-sala-metronomo-marzo-2024' },
    { id: 3, title: 'BOILER ROOM 2018', url: 'https://www.youtube.com/watch?v=uS7Tk1RIQqI' },
    { id: 4, title: 'ALOCACIA 2024', url: 'https://www.youtube.com/watch?v=2RtSqJaXaZw' }
]

const toEmbed = (url) =>
    url.includes('soundcloud.com')
        ? `https://w.soundcloud.com/player/?${new URLSearchParams({ url, auto_play: 'true', visual: 'true' })}`
        : `https://www.youtube.com/embed/${url.match(/[?&]v=([^&]+)/)[1]}?autoplay=1&controls=1`

export default function TopMixesSection() {
    const [idx, setIdx] = useState(0)
    const [playing, setPlaying] = useState(false)

    /* Hace girar el vinilo solo si está sonando */
    useEffect(() => {
        document.documentElement.style.setProperty('--spin', playing ? 'running' : 'paused')
    }, [playing])

    return (
        <section className={styles.wrapper}>
            <h2 className={styles.sectionTitle}>TOP MIXES</h2>

            <div className={styles.cdj}>
                {/* Pantalla */}
                <div className={styles.screen}>
                    <div className={styles.track}>
                        <span className={styles.marquee}>{mixes[idx].title} • </span>
                        <span className={styles.marquee}>{mixes[idx].title} • </span>
                    </div>          <div className={styles.wave} />
                    {playing && (
                        <iframe
                            key={idx}
                            src={toEmbed(mixes[idx].url)}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className={styles.embed}
                        />
                    )}
                </div>

                {/* HOT-CUE decorativo */}
                <div className={styles.hotRow}>
                    {Array.from({ length: 8 }).map((_, i) => <button key={i} className={styles.hot} />)}
                </div>

                {/* Columna Izquierda */}
                <div className={styles.left}>
                    <button
                        className={`${styles.play} ${playing ? styles.playing : ''}`}
                        onClick={() => setPlaying(p => !p)}
                        aria-label="Play / Pause"
                    />
                    <button className={styles.cue} aria-label="Cue" />
                </div>

                {/* Jog */}
                <div className={styles.jogWrap}>
                    <div className={styles.jog} />
                </div>

                {/* Columna Derecha */}
                <div className={styles.right}>
                    <button
                        className={styles.browse}
                        onClick={() => { setIdx(i => (i + 1) % mixes.length); setPlaying(false) }}
                        aria-label="Next Mix"
                    />
                    <div className={styles.fader}>
                        <div className={styles.faderKnob} style={{ top: `${35 + idx * 18}%` }} />
                    </div>
                </div>
            </div>
        </section>
    )
}
