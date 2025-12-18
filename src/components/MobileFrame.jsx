import './DeviceFrame.css';

const MobileFrame = ({ url, title }) => {
    return (
        <div className="project-card">
            <h3 className="project-title">{title}</h3>
            <div className="mobile-device">
                <div className="mobile-notch"></div>
                <div className="mobile-screen">
                    <iframe
                        src={url}
                        title={title}
                        className="mobile-iframe"
                        loading="lazy"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileFrame;
