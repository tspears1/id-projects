/* eslint-disable react/prop-types */
// React ====================================
import React from "react";

// Components ===============================
import { Badge } from '../../ui/Badge/Badge.jsx';
import { Button } from '../../ui/Button/Button.jsx';
import { Icon } from '../../atoms/Icon/Icon.jsx';

// Context ==================================
import { useDatabase } from "../../../context/database/useDatabase.js";

// Utils ====================================
import { getFileType } from "../../../utils/fileTypes.js";

/**
 * @component AssetCard - Main application component.
 *
 * @param {AssetCardProps} props - Component props.
 *
 * @returns {JSX.Element}
 */
const AssetCard = ({ asset, layout, className = "", ...props }) => {

  // Format Asset ============================
  const { title, description, lastModified, fileUrl = '', status } = asset;

  const { icon, label } = getFileType(fileUrl);

  const _lastModified = new Date(lastModified).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const { taxonomy } = useDatabase();

  // Methods ================================
  const getStatusVariant = (status) => {
    if (!taxonomy.status) { return 'neutral' }
    const _status = taxonomy.status.find((s) => s.value === status)
    return _status?.color ?? 'neutral'
  }

  return (
    <article className={`asset-card ${className}`} {...props}>
      <Button
        className="asset-card__cell asset-card__title button--reset"
        asChild={true}
        variant="naked"
      >
        <h4>
          <a
            className="asset-card__link pseudo-link"
            href={fileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${title}`}
          >
            {title}
          </a>
        </h4>
      </Button>
      <div className="asset-card__cell asset-card__description">{description}</div>
      <div className="asset-card__cell asset-card__last-modified">{_lastModified}</div>
      <div className="asset-card__cell asset-card__status">
        <Badge variant={getStatusVariant(status)} size="sm" className="asset-card__status-badge">
          {status}
        </Badge>
      </div>
      <div className="asset-card__cell asset-card__file">
        <div className="asset-card__file-inner">
          <Icon icon={icon} className="asset-card__file-icon" />
          <span className='sr-only'>{label}</span>
        </div>
      </div>
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
