import DownloadIcon from '@mui/icons-material/Download';
import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const DownloadImagesAsZip = ({ imageUrls }) => {

    const downloadImages = async () => {
        const zip = new JSZip();

        // Loop through each image URL and add to the zip
        for (let i = 0; i < imageUrls.length; i++) {
            const url = imageUrls[i];
            const data = await fetch(url).then(response =>
                response.blob()
            );
            zip.file(`image${i + 1}.jpg`, data, { binary: true });
        }

        const content = await zip.generateAsync({ type: 'blob' });

        saveAs(content, 'AlbumCovers.zip');
    };

    return (
        <DownloadIcon onClick={downloadImages} />
    );
};

export default DownloadImagesAsZip;
