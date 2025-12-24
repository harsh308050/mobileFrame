import './DeviceFrame.css';
import { useEffect, useRef, useState } from 'react';

const MobileFrame = ({ url, title }) => {
    const DESIGN_W = 390;
    const DESIGN_H = 844;
    const containerRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateScale = () => {
            const el = containerRef.current;
            if (!el) return;
            const cw = el.clientWidth;
            const ch = el.clientHeight;
            const s = Math.min(cw / DESIGN_W, ch / DESIGN_H);
            const scaledW = DESIGN_W * s;
            const scaledH = DESIGN_H * s;
            setScale(s);
            setOffset({ x: (cw - scaledW) / 2, y: (ch - scaledH) / 2 });
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <div className="mobile-device">
                <div className="mobile-screen" ref={containerRef}>
                    {/* iPhone Dynamic Island */}
                    <div className="dynamic-island" aria-hidden="true"></div>
                    <div
                        className="screen-content"
                        style={{
                            width: DESIGN_W,
                            height: DESIGN_H,
                            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                        }}
                    >
                        <iframe
                            src={url}
                            title={title}
                            className="mobile-iframe"
                            loading="lazy"
                            allowFullScreen
                            style={{ width: DESIGN_W, height: DESIGN_H }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileFrame;
