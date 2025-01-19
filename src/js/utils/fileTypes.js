const fileTypes = [
	{
		value: "pdf",
		label: "PDF",
		icon: "file-pdf",
		regex: "/.pdf$/",
	},
	{
		value: "png",
		label: "PNG",
		icon: "file-png",
		regex: "/.png$/",
	},
	{
		value: "jpg",
		label: "JPG",
		icon: "file-jpg",
		regex: "/.jpg$/",
	},
	{
		value: "jpeg",
		label: "JPEG",
		icon: "file-jpg",
		regex: "/.jpeg$/",
	},
	{
		value: "gif",
		label: "GIF",
		icon: "file-image",
		regex: "/.gif$/",
	},
	{
		value: "svg",
		label: "SVG",
		icon: "file-svg",
		regex: "/.svg$/",
	},
	{
		value: "sheets",
		label: "GoogleSheets",
		icon: "table",
		regex: "/docs.google.com/spreadsheets/",
	},
	{
		value: "excel",
		label: "Excel",
		icon: "microsoft-excel-logo",
		regex: "/.xlsx$/",
	},
	{
		value: "doc",
		label: "Google Doc",
		icon: "file-doc",
		regex: "/docs.google.com/document/",
	},
	{
		value: "word",
		label: "Word",
		icon: "microsoft-word-logo",
		regex: "/.docx$/",
	},
	{
		value: "figma",
		label: "Figma",
		icon: "figma-logo",
		regex: "/figma.com/design/",
	},
	{
		value: "codepen",
		label: "Codepen",
		icon: "codepen-logo",
		regex: "/codepen.io/",
	},
	{
		value: "link",
		label: "Link",
		icon: "globe",
		regex: "/.*/",
	},
];

/**
 * @function getFileType
 *
 * Get file type from file name.
 *
 * @param {string} fileName - File name.
 * @returns {FileType|null} - File type object or null if not found.
 */
const getFileType = (fileName) => {
	if (!fileName || typeof fileName !== 'string') { return null }
	const fileType = fileTypes.find((file) => {
		const regex = new RegExp(file.regex);
		return regex.test(fileName)
	});
	return fileType ?? null;
};

export { fileTypes, getFileType };

// Types ====================================

/**
 * @typedef {Object} FileType
 * @property {string} value - File type value.
 * @property {string} label - File type label.
 * @property {string} icon - File type icon.
 * @property {string} regex - File type regex.
 */
