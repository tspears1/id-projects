/* eslint-disable react/prop-types */
// React ====================================
import React from "react";

// Components ===============================
import { Button } from '../../ui/Button/Button.jsx';
import { Icon } from '../../atoms/Icon/Icon.jsx';

// Context ==================================
import { useStore } from "../../../context/store/useStore.js";

// Utils ====================================
import { getFileType } from "../../../utils/fileTypes.js";

/**
 * @component AssetCard - Main application component.
 *
 * @param {AssetCardProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const AssetCard = ({ asset, className = "", ...props }) => {

  const { title, description, lastModified, fileUrl = '', status } = asset;
  const { icon, label } = getFileType(fileUrl);

  const _lastModified = new Date(lastModified).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const { activeLayout } = useStore();

  return (
    <article className={`asset-card ${className}`} {...props}>
      { title && <div className="asset-card__title">{title}</div> }
      { description && <div className="asset-card__description">{description}</div> }
      { lastModified && <div className="asset-card__last-modified">{_lastModified}</div> }
      { status && <div className="asset-card__status">{status}</div> }
      <Button
        className="asset-card__file-url"
        variant="outline"
        size='icon-xl'
        asChild={true}
        tooltip={`View ${label}`}
      >
        <a href={fileUrl} target="_blank" rel="noreferrer">
          <span className='sr-only'>{label}</span>
          <Icon icon={icon} className="asset-card__file-url-icon" />
        </a>
      </Button>
    </article>
  );
};

AssetCard.displayName = "AssetCard";

export { AssetCard };


// Types ====================================
/**
 * @typedef {Object} AssetCardProps - AssetCard component props.
 *
 * @property {Asset} asset - Asset object.
 * @property {string} className - AssetCard className.
 */

/**
 * @typedef {Object} Asset
 * @property {string} title - Asset title.
 * @property {string} description - Asset description.
 * @property {string} lastModified - Asset last modified date.
 * @property {string} fileUrl - Asset file url.
 * @property {string} status - Asset status.
 */
