# Wedding Invitation Visual & Audio Assets Guide

All text, dates, venues, gallery items, and asset paths are centrally configured in [`src/data/weddingData.ts`](../../src/data/weddingData.ts).

## Replacing Photographs (`public/images/`)

- **`couple-portrait.png`**: Portrait of the couple shown inside the ornamental scalloped arch in the *Our Story* section and in the *Gallery* (recommended aspect ratio: `3:4` or `4:5`).
- **`hero-panorama.png`**: Scenic Kerala × Tamil Nadu fusion illustration at the bottom of the *Hero* section (`16:9` aspect ratio with a `#F8F2E8` warm ivory sky at the top).
- **`event-muhurtham.png`**: Ceremony photograph for the *Muhurtham* card (`4:3` aspect ratio).
- **`event-reception.png`**: Evening photograph for the *Reception* card (`4:3` aspect ratio).
- **`venue-kerala.png`**: Photograph of the Kerala wedding venue (`4:3` aspect ratio).
- **`venue-tamilnadu.png`**: Photograph of the Tamil Nadu reception venue (`4:3` aspect ratio).
- **`gallery-jasmine.png`**, **`gallery-lamp.png`**, **`gallery-gopuram.png`**: Editorial gallery photographs (`3:4` vertical aspect ratio).

## Replacing Background Audio (`public/audio/`)

- Replace `public/audio/wedding-song.mp3` (or update `weddingData.audio.src` in `src/data/weddingData.ts`) with your preferred MP3 or WAV instrumental track.
