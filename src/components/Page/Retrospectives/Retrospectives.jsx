import { PlusCircleFilled } from "@ant-design/icons";
import React from "react";
import AppButton from "../../Common/AppButton/AppButton";
import Retrocard from "./Retrocard/Retrocard";
import styles from "./Retrospectives.module.less";
function Retrospectives() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.actions}>
                    <AppButton loading={false} size={"medium"} style={{ marginRight: "8px" }}>
                        Join Call
                    </AppButton>
                    <AppButton loading={false} size={"medium"}>
                        Mark as Complete
                    </AppButton>
                </div>
                <div className={styles.retroHeadingContainer}>
                    <div className={styles.heading}>
                        <h3>
                            <b>Positive</b>
                        </h3>
                    </div>
                    <div className={styles.heading}>
                        <h3>
                            <b>Negative</b>
                        </h3>
                    </div>
                    <div className={styles.heading}>
                        <h3>
                            <b>Neutral</b>
                        </h3>
                    </div>
                    <div className={styles.heading}>
                        <h3>
                            <b>Action Items</b>
                        </h3>
                    </div>
                </div>
                <div className={styles.retroContainer}>
                    <div className={styles.retroCardContainer}>
                        <Retrocard type={"positive"} />
                    </div>
                    <div className={styles.retroCardContainer}>
                        <Retrocard type={"negitive"} />
                    </div>
                    <div className={styles.retroCardContainer}>
                        <Retrocard type={"neutral"} />
                    </div>
                    <div className={styles.retroCardContainer}>
                        <Retrocard type={"actionItem"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Retrospectives;