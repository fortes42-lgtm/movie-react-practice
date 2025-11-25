import { TEXT_STYLES, LAYOUT_STYLES } from "@/constants/style.js";
import React, { useEffect, useState } from "react";

export const Detail = () => {
  return (
    <div className={LAYOUT_STYLES.MAIN_CONTAINER}>
      <div className={LAYOUT_STYLES.CARD_BOX + " mt-8"}>
        <h1 className={TEXT_STYLES.MAIN_HEADING + " mb-4"}>Item Detail</h1>

        <p className={TEXT_STYLES.BODY_TEXT}>
          This is the description of the item.
        </p>

        <a href="/" className={TEXT_STYLES.BLUE_LINK + " block mt-4"}>
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default Detail;
