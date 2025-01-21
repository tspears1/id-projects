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
const Sprint = ({ sprint, layout }) => {
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
      <ul
        className="sprint__list"
        role={layout === 'table' ? 'table' : null}
      >
        <li className="sprint__list-header" role={layout === 'table' ? 'row' : null}>
          <div className='sprint__list-header-cell' role={layout === 'table' ? 'columnheader' : null}>
            Title
          </div>
          <div className='sprint__list-header-cell' role={layout === 'table' ? 'columnheader' : null}>
            Description
          </div>
          <div className='sprint__list-header-cell' role={layout === 'table' ? 'columnheader' : null}>
            Last Modified
          </div>
          <div className='sprint__list-header-cell' role={layout === 'table' ? 'columnheader' : null}>
            Status
          </div>
          <div className='sprint__list-header-cell' role={layout === 'table' ? 'columnheader' : null}>
            File Type
          </div>
        </li>
        {assetList.map((asset, index) => (
          <li className="sprint__list-item" key={`asset-${index}`}>
            <AssetCard asset={asset} layout={layout} />
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
