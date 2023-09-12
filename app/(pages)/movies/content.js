import DefaultCard from "@/app/components/defaultCard";

export default function MoviesContent() {
  return (
    <>
      <div className="main-content">
        <div className="container">
          {/* Content Header */}
          <div className="row">
            <div className="col d-flex justify-content-between align-items-center">
              <div className="h3 text-white">Search Results</div>
            </div>
          </div>
          {/* Content */}
          <div className="row mt-4">
            <div className="col">
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
