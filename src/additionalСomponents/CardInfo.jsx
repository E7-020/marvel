import { Link } from "react-router-dom";

const CardInfo = ({ info }) => {
  if (!info) {
    return (
      <div className="third-block">
        <div className="third-block-info">
          <p className="third-block-info-text">
            Please select a character to see information
          </p>
          <div className="third-block-info-field">
            <div className="third-block-info-first-field"></div>
            <div className="third-block-info-empty"></div>

            <div className="btn-text-block">
              <div className="btn-text-block-info-second-field"></div>
            </div>
          </div>
          <div className="third-block-info-second-text"></div>

          <div></div>
          <div className="third-second-block-info-field">
            <div className="third-block-info-third-field"></div>
            <div className="third-block-info-fourth-field"></div>
            <div className="third-block-info-fifth-field"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="third-block-pressing">
      <div className="third-block-info-pressing">
        <p className="third-block-info-text-pressing">
          Please select a character to see information
        </p>

        <div className="third-block-info-field">
          <div className="third-block-info-first-field-pressing">
            {" "}
            <img
              className={`${
                info.thumbnail?.path
                  ? "third-block-info-first-img-field-pressing"
                  : "third-block-info-first-img-field"
              }`}
              src={`${info.thumbnail?.path}.${info.thumbnail?.extension}`}
              alt=""
            />
          </div>
          <div className="third-block-info-empty-pressing"></div>

          <div className="btn-text-block-pressing">
            <div className="btn-text-block-info-second-field-pressing">
              {info.name}
            </div>
            <div>
              <Link
                to={`/HeroesInfo/${info.id}`}
                style={{ textDecoration: "none" }}
                className="first-btn-block-pressing"
              >
                HOMEPAGE
              </Link>
            </div>
            <Link
              to={info.urls[1].url}
              style={{ textDecoration: "none" }}
              className="second-btn-block-pressing"
            >
              WIKI
            </Link>
          </div>
        </div>
        <div className="third-block-info-second-text-pressing">
          {info.description}
        </div>

        <div></div>
        <div className="third-second-block-info-field-pressing">
          <div className="third-block-info-third-field"></div>
          <div className="third-block-info-fourth-field"></div>
          <div className="third-block-info-fifth-field"></div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
