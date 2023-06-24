import "../../styles/global/PageBanner.css";

interface PageBannerProps {
    page: string;
}

function PageBanner({ page }: PageBannerProps) {
    return (
        <div id={`page-banner-${page.toLowerCase()}`} className="page-banner">
            <div
                id={`page-banner-text-container-${page.toLowerCase()}`}
                className="page-banner-text-container"
            >
                <div className="page-banner-text">
                    <h1>{page}</h1>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;
