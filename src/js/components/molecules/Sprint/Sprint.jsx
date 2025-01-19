// React ====================================
import React from "react";

// Components ===============================
import { AssetCard } from "../AssetCard/AssetCard.jsx";

/**
 * @component Sprint - Main application component.
 *
 * @param {SprintProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const Sprint = ({ sprint }) => {
  const { title, date, assetList } = sprint;
  const _date = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return (
    <section className="sprint">
      <div className="sprint__header">
        <h3 className="sprint__title">{title}</h3>
        <div className="sprint__date">{_date}</div>
      </div>
      <ul className="sprint__list" data-sprint-display="table">
        <li className="sprint__list-header">Table heading</li>
        {assetList.map((asset, index) => (
          <li className="sprint__list-item" key={`asset-${index}`}>
            <AssetCard asset={asset} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { Sprint };

// Types ====================================
/**
 * @typedef {Object} SprintProps - Sprint component props.
 * @property {string} title - Sprint title.
 * @property {string} date - Sprint date.
 * @property {Asset[]} assetList - Array of assets.
 * @property {string} slug - Sprint slug.
 */

/**
 * @typedef {Object} Asset
 * @property {string} title - Asset title.
 * @property {string} lastModified - Asset last modified date.
 * @property {string} fileUrl - Asset file url.
 * @property {string} status - Asset status.
 */
