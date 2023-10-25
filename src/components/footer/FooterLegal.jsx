import React from "react";
import { NavLink } from "react-router-dom";
import ResetLocation from "../../helpers/ResetLocation";

function FooterLegal() {
  return (
    <ul className="footer-menu  flex-container flex-column">
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/careers"
        >
          Carrers
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/privacy"
        >
          Privacy
        </NavLink>
      </li>

      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/refunds"
        >
          Refunds
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  textDecoration: "none",
                  color: "#ff6240",
                }
              : {}
          }
          onClick={ResetLocation}
          className="txt-white"
          to="/terms"
        >
          Terms
        </NavLink>
      </li>
    </ul>
  );
}

export default FooterLegal;
