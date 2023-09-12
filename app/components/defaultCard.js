import Image from "next/image";
import clockIcon from "../assets/images/clock_icon.svg";
import eyeIcon from "../assets/images/eye_icon.svg";

export default function DefaultCard({ genre, title, duration, views }) {
  const Dtitle = title ? title : "The Ring's Lord";
  const Dgenre = genre ? genre : "Fantasy";
  const Dduration = duration ? duration : "1hr 24mins";
  const Dviews = views ? views : "21.3K";

  return (
    <>
      <div
        className="card pcariCard"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
        }}
      >
        <div
          className="d-flex p-3 pt-4 pb-4 align-items-start flex-column"
          style={{ height: "100%" }}
        >
          <div className="row mb-auto">
            <div className="col">
              <div className="badge">{Dgenre}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="content-descriptions">
                <div className="content-duration me-4">
                  <Image
                    className="me-2"
                    priority
                    width={24}
                    height={24}
                    src={clockIcon}
                    alt="Duration"
                  />
                  <div className="regular-text">{Dduration}</div>
                </div>
                <div className="content-views">
                  <Image
                    className="me-2"
                    priority
                    width={24}
                    height={24}
                    src={eyeIcon}
                    alt="Views"
                  />
                  <div className="regular-text">
                    <span>{Dviews}</span> views
                  </div>
                </div>
              </div>
              <div className="content-title">
                <div className="h3 text-white">{Dtitle}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
