import React from "react";
import styles from "src/components/Page/Scrumboard/Ticket/Ticket.module.less";
import { Divider, Input } from "antd";
import PropTypes from "prop-types";
import { DeleteFilled } from "@ant-design/icons";
import { Draggable } from "react-beautiful-dnd";
import CardCustom from "src/components/Common/Card/Card";
import CustomTag from "src/components/Common/CustomTag/CustomTag";
import { colors } from "src/config/constants";
import CustomDivider from "src/components/Common/CustomDivider/CustomDivider";
import TicketListItem from "src/components/TicketModal/TicketListItem";
import AppSelect from "src/components/Common/AppSelect/AppSelect";
import ticketConstants from "src/config/Ticket";

function Ticket({ onClick,index,ticketData }) {

    const { TextArea } = Input;

    const handleClick = ()=>{
        onClick()
    }
    return (
        <Draggable draggableId={ticketData._id} index={index}  key={ticketData._id}>
            {(provided) => (
                <div
                    className={styles.container}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <CardCustom onClick={handleClick} style={{border:`1px solid ${colors.ticketBorderRed}`}} bodyStyle={{ height: "100%", padding: "8px"}}>
                        <div className={styles.ticketHeader}>
                            <div className="ticketTitle" style={{ width: "50%"}}>
                                <b style={{color: `${colors.tagBlue}` }}>Ticket No:</b> {ticketData.ticketId}
                            </div>

                            <div
                                className="tagContainer"
                                style={{ width: "50%", display: "flex", justifyContent: "flex-end" }}
                            >
                                <CustomTag color={colors.tagRed} text={"Backlog"} />
                                <CustomTag color={colors.tagBlue} text={"User Story"} />
                            </div>
                        </div>
                        {/* <CustomDivider/> */}

                        <TextArea
                            placeholder="The ticket Description goes here."
                            isPassword={false}
                            size="large"
                            style={{
                                width: "100%",
                                height: "90%",
                                fontSize: "0.8rem",
                                marginTop: "15px",
                            }}
                            value={ticketData.description}
                        />
                        <div className={styles.metaContainer} style={{ width: "100%" }}>
                            <div className={styles.listItem}>
                                <TicketListItem
                                    label="Assignee"
                                    Component={
                                        <AppSelect
                                            style={{ width: "60%" }}
                                            // onChange={handleAssigneeChange}
                                            value={"Vishnu"}
                                            options={[]}
                                        />
                                    }
                                />
                            </div>
                            <div className={styles.listItem}>
                                <TicketListItem
                                    label="Sprint"
                                    Component={
                                        <AppSelect
                                            style={{ width: "60%" }}
                                            // onChange={handleAssigneeChange}
                                            value={"sprint_1"}
                                            options={ticketConstants.sprints}
                                        />
                                    }
                                />
                            </div>
                            <div className={styles.listItem}>
                                <TicketListItem
                                    label="Type"
                                    Component={
                                        <AppSelect
                                            style={{ width: "60%" }}
                                            // onChange={handleAssigneeChange}
                                            value={"BUG"}
                                            options={ticketConstants.ticketType}
                                        />
                                    }
                                />
                            </div>
                        </div>
                    </CardCustom>
                </div>
            )}
        </Draggable>
    );
}

Ticket.propTypes = {
    text: PropTypes.string,
    index: PropTypes.number,
    onClick : PropTypes.func,
    ticketData : PropTypes.object
};

export default Ticket;
