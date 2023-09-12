import DefaultCard from "@/app/components/defaultCard";

export default function HomeContent() {
  return (
    <>
      <div className="main-content">
        <div className="container">
          {/* Content Header */}
          <div className="row">
            <div className="col d-flex justify-content-between align-items-center">
              <div className="h3 text-white">New Releases</div>
              <div className="h5 view-more-style text-end">
                <a href="">View More</a>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="row mt-4">
            <div className="col">
              {/* Content Showcase or Highlight */}
              <div className="row g-3 gy-3">
                <div className="col-xl-8 col-md-6">
                  <DefaultCard />
                </div>
                <div className="col-xl-4 col-md-6">
                  <DefaultCard title={"Interspace"} />
                </div>
              </div>
              {/* Content Row */}
              <div className="row g-3">
                <div className="col-xl-4 col-md-6">
                  <DefaultCard title={"Interspace"} />
                </div>
                <div className="col-xl-4 col-md-6">
                  <DefaultCard title={"He & Him"} />
                </div>
                <div className="col-xl-4 col-md-6">
                  <DefaultCard title={"Lo Lo Land"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
