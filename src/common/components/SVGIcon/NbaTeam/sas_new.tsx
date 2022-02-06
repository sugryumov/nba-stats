import React from 'react';
import { ISvgIcon } from '../interface';

const SAS = ({ width, height }: ISvgIcon) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 400 400"
  >
    <style>{'.sas0{fill:#c4ced4}'}</style>
    <path
      d="m143.8 252.2-13.2 19.6 21.7-7.1 8.8 21.2 6.6-22.8 24.4 6.3-15.8-18.3 19-15.7-17 1 11.2-12.6h21.9l25-44.3v-29.2h-17.7l-8.5 15.1-1.6 11.4-12.8 22.7h-11.7l11.5-20.3v-28.8h-18.4l-8.2 15-1.5 11.5-20 35.7 3.1 7.9-3.9-4.2 1.6 21.6-23.3 1 18.8 13.3zm9.9-28.2h8.3l-2.5 6.3-5.8-6.3z"
      style={{
        fill: '#fff',
      }}
    />
    <path d="M49.1 199.5c-7.2 1.8-14.5 3.8-21.6 5.8-.8.2-1.6.5-2.3.7v-18.1c1.1-.3 2.1-.6 3.2-.9 5.9-1.7 11.8-3.3 17.7-4.8 1-.3 2.1-.5 3.1-.8v9.8c5.5-1.4 11-2.7 16.5-3.9v-12c-1.9-2.9-3.8-5.8-5.8-8.8-1.4.3-2.8.7-4.2 1h-.2c-11.8 2.8-23.5 6-35.1 9.5-.4.1-.8.3-1.3.4-1.5.4-2.9.9-4.4 1.4-2 4.1-3.9 8.2-5.8 12.2v24.3c2.9 2 5.8 4 8.8 6.1 2.4-.7 4.8-1.5 7.2-2.2 7.4-2.2 14.8-4.2 22.2-6.1l2.4-.6v18.8c-1 .3-2.1.5-3.1.8-6.1 1.6-12.2 3.2-18.3 5-1 .3-2.1.6-3.1.9v-9.8c-5.4 1.6-10.9 3.3-16.3 5v12.1c1.9 2.7 3.8 5.5 5.7 8.2 1.4-.4 2.8-.9 4.3-1.3.5-.1.9-.3 1.4-.4 11.8-3.6 23.7-6.8 35.7-9.7 1.5-.4 2.9-.7 4.4-1 2-3.9 3.9-7.8 5.9-11.6v-25c-2.9-2.3-5.9-4.7-8.8-7-3 .7-5.6 1.4-8.2 2M389.5 220.2l-8.7-11.7-7.8-2.4c-7.2-2.1-14.4-4.1-21.6-5.9l-2.4-.6v-18.2c1.1.3 2.1.5 3.2.8 5.9 1.5 11.8 3.1 17.7 4.8 1 .3 2.1.6 3.1.9v9.8c5.5 1.6 10.9 3.3 16.3 5v-12c-1.9-4-3.8-7.9-5.7-11.9-1.4-.4-2.8-.9-4.2-1.3-.1 0-.1 0-.2-.1-11.6-3.6-23.3-6.8-35.1-9.6-.4-.1-.9-.2-1.3-.3-1.5-.4-3-.7-4.5-1.1l-6 9v24.3c3 3.6 5.9 7.3 8.9 10.9 2.4.6 4.9 1.2 7.3 1.8 7.4 1.9 14.8 3.9 22.2 6 .8.2 1.6.5 2.3.7v18.8c-1-.3-2.1-.6-3.1-.9-6.1-1.8-12.2-3.4-18.3-5-1-.3-2.1-.5-3.1-.8v-9.9c-5.5-1.4-11-2.7-16.5-3.9v12.1c1.9 3.8 3.8 7.6 5.8 11.4 1.4.3 2.9.7 4.3 1 .5.1.9.2 1.4.3 12 2.9 23.9 6.1 35.7 9.8 1.5.4 2.9.9 4.3 1.3 1.9-2.8 5.7-8.5 5.7-8.5.3.3.3-16.3.3-24.6M130.3 154.5c-.5.1-.9.1-1.4.2-15.6 1.8-31.1 4.2-46.5 7.1v74.6c5.5-1.1 11.1-2.1 16.7-3v-26c9.9-1.6 19.9-3 29.8-4.2.5-.1.9-.1 1.4-.2 1.5-.2 3-.3 4.5-.5 2.1-3.9 4.2-7.7 6.4-11.6v-26.8c-2.1-3.4-4.2-6.9-6.4-10.3-1.5.3-3 .5-4.5.7m-5.9 16.3v21.1c-1.3.2-2.5.3-3.8.5-7.2.9-14.4 2-21.5 3.1v-24.9c7.2-1.2 14.3-2.2 21.5-3.1 1.3-.2 2.5-.3 3.8-.5v3.8zM309.7 200.2c2-.8 3.9-1.5 5.9-2.3v-25.8l-10.5-12.3c-16.2-2.8-32.4-5-48.7-6.5v74.6c5.6.5 11.2 1.1 16.8 1.8v-29.2c4.3.5 8.6 1.1 12.9 1.7 1.4.2 2.9.4 4.3.6 2.9.4 5.7.9 8.6 1.3v29.2c.3 0 .6.1.9.1 5.3.9 10.5 1.8 15.8 2.8v-31.7c-2.1-1.4-4-2.8-6-4.3m-14.7-8.4c-7.3-1.1-14.6-2.2-21.9-3v-22c7.4.9 14.7 1.9 22.1 3.1 1.2.2 2.5.4 3.7.6v22c-1.3-.3-2.6-.5-3.9-.7M79 134.9c-2.4.4-4.7.9-7 1.4-.3.1-.5.1-.8.2V130.6c.3-.1.7-.1 1-.2 1.9-.4 3.8-.7 5.8-1.1.3-.1.7-.1 1-.2v3.2c1.8-.3 3.6-.7 5.4-1v-3.9c-.6-1-1.2-1.9-1.9-2.9-.5.1-.9.2-1.4.2H81c-3.8.7-7.6 1.4-11.4 2.2-.1 0-.3.1-.4.1-.5.1-1 .2-1.4.3-.6 1.3-1.3 2.5-1.9 3.8v7.9c1 .8 1.9 1.5 2.9 2.3.8-.2 1.6-.3 2.4-.5 2.4-.5 4.8-.9 7.2-1.4.3 0 .5-.1.8-.1v6c-.3.1-.7.1-1 .2-2 .4-4 .8-6 1.1-.3.1-.7.1-1 .2v-3.2c-1.8.4-3.6.7-5.3 1.1v3.9c.6 1 1.2 1.9 1.9 2.9.5-.1.9-.2 1.4-.3.2 0 .3-.1.5-.1 3.9-.8 7.7-1.5 11.6-2.2.5-.1 1-.2 1.4-.3.6-1.2 1.3-2.4 1.9-3.7v-8.1c-1-.8-1.9-1.6-2.9-2.4-.9.2-1.8.3-2.7.5M97.6 121.9c-2.2 8.4-4.4 16.8-6.7 25.2 1.7-.3 3.4-.6 5.1-.8.5-1.9.9-3.8 1.4-5.6 2.6-.4 5.2-.8 7.9-1.2.5 1.7.9 3.5 1.4 5.2 1.8-.3 3.7-.5 5.5-.8-2.2-7.8-4.4-15.5-6.7-23.2-2.7.4-5.3.8-7.9 1.2m.8 14.5c1-4 2-8 2.9-12.1 1 3.7 1.9 7.5 2.9 11.2-1.9.3-3.9.6-5.8.9M132.7 133.4c-2.8-5.1-5.7-10.1-8.5-15.2-1.9.2-3.8.4-5.7.7v24.2l4.8-.6v-16.2l8.4 15.3c1.9-.2 3.8-.4 5.8-.6v-24.2c-1.6.2-3.2.3-4.8.5v16.1zM161.6 115.1c-2.2 8.2-4.5 16.4-6.7 24.6 1.7-.1 3.4-.2 5.2-.3.5-1.8.9-3.7 1.4-5.5 2.6-.2 5.3-.3 7.9-.4.5 1.8.9 3.6 1.4 5.4 1.9-.1 3.7-.2 5.6-.2-2.2-8-4.5-15.9-6.7-23.9-2.8 0-5.5.1-8.1.3m.8 14.6c1-3.9 2-7.9 3-11.8 1 3.8 1.9 7.7 2.9 11.5-2 .1-3.9.2-5.9.3M198.4 130.1c-2.8-5.4-5.7-10.7-8.5-16-1.9 0-3.8.1-5.7.1v24.2c1.6 0 3.2-.1 4.8-.1V122c2.8 5.4 5.6 10.7 8.4 16.1h5.8V114h-4.8v16.1zM211.1 118.5c2.2 0 4.4.1 6.6.2v19.8c1.8.1 3.6.1 5.4.2v-19.8l6.6.3v-4.3c-6.2-.3-12.4-.5-18.6-.6v4.2zM279.1 135c-2.8-5.7-5.6-11.4-8.5-17.1l-5.7-.6v24.2c1.6.2 3.2.3 4.8.5v-16.2c2.8 5.7 5.6 11.4 8.4 17.2 1.9.2 3.8.5 5.7.7v-24.2l-4.8-.6V135h.1zM291.7 124.3c1.4.2 2.7.4 4.1.6v16.7c-1.4-.2-2.7-.4-4.1-.6v3.7c4.5.6 9 1.3 13.5 2.1v-3.7c-1.4-.2-2.7-.4-4.1-.7v-16.7c1.4.2 2.7.4 4.1.7v-3.7l-13.5-2.1v3.7M254.9 116.4c-.5 0-1-.1-1.5-.1-3.9-.3-7.7-.6-11.6-.9h-.5c-.5 0-1-.1-1.5-.1-.7 1.1-1.4 2.3-2.1 3.4v17c.7 1.2 1.4 2.5 2.1 3.7.5 0 1 .1 1.5.1h.5c3.9.3 7.7.5 11.6.9.5 0 1 .1 1.5.1.7-1.1 1.4-2.3 2.1-3.4v-17c-.7-1.2-1.4-2.4-2.1-3.7m-3.3 5.2V136.3c-.5 0-.9-.1-1.4-.1-1.9-.2-3.8-.3-5.7-.4-.5 0-.9-.1-1.4-.1v-16.1c.5 0 .9.1 1.4.1 1.9.1 3.8.3 5.7.4.5 0 .9.1 1.4.1v1.4zM332.2 131.2c-.7-1.3-1.4-2.7-2-4l-1.5-.3c-3.8-.8-7.6-1.5-11.5-2.2-.2 0-.4-.1-.5-.1l-1.5-.3c-.7 1.1-1.4 2.1-2 3.2v17c.7 1.3 1.4 2.6 2 3.9l1.5.3c.2 0 .4.1.5.1 3.8.7 7.7 1.4 11.5 2.2l1.5.3c.7-1.1 1.4-2.1 2-3.2v-16.9zm-5.3.8V146.7c-.5-.1-.9-.2-1.4-.3-1.9-.4-3.8-.7-5.7-1.1-.5-.1-.9-.2-1.4-.3v-16.1c.5.1.9.2 1.4.3 1.9.4 3.8.7 5.7 1.1.5.1.9.2 1.4.3v1.4M170.2 177.9l-19.7 35 3.3 8.2H166l-5.6 14.1-10.4-11.3 1.2 16.6-18.1.8 14.4 10.1-10.2 15.3 16.5-5.4 6.8 16.4 5.2-17.9 18.4 4.7-11.9-13.7 14.6-12.1-15.1.9 16.4-18.5h21.5l23.8-42.2v-25.7h-13.4l-7.7 13.7-1.3 11-13.8 24.6h-18.1l13.5-23.8v-25.4h-14l-7.4 13.6-1.1 11z" />
    <path
      className="sas0"
      d="M228.5 157h-6.3l-4.8 8.5h6.5zM187.8 157h-6.7l-4.8 8.5h7.1zM175.1 211.1l-14 32-6.3-6.8.6 8.6-9.4.4 7.5 5.3-5.3 7.9 8.6-2.8 3.5 8.5 2.7-9.3 9.6 2.5-6.2-7.2 7.6-6.3-10.7.7h-.7l22.1-33.4h19.2l17-30.4h-6.6L200 205.9h-34.3l14.3-25.1h-6.7L156 211.2h19.1v-.1zM181.6 169h-6.2l-.8 7.3h6.4zM222.5 169h-6.1l-.8 7.3h6.3z"
    />
    <path d="M158.1 252.6c1.6 0 2.8-1.2 2.8-2.8s-1.3-2.8-2.8-2.8c-1.6 0-2.8 1.3-2.8 2.8s1.2 2.8 2.8 2.8" />
  </svg>
);

export default SAS;
