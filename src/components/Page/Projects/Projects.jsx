import { Card } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import assetMap from "src/assets";
import AppButton from "src/components/Common/AppButton/AppButton";
import AppModal from "src/components/Common/AppModal/AppModal";
import ProjectItem from "src/components/Common/ProjectItem/ProjectItem";
import Searchbox from "src/components/Common/Searchbox/Searchbox";
import styles from "src/components/Page/Projects/Projects.module.less";
import { loadProjects } from "src/redux/projectList/projectListActions";
import { useRouting } from "src/util/hooks";

const { Meta } = Card;
const Projects = (props) => {
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.projectList.projects);
    const [create, setCreate] = useState(false);
    const closeCreate = () => setCreate(false);
    const openCreate = () => setCreate(true);
    useEffect(() => {
        dispatch(loadProjects());
    }, []);

    // const history = useHistory();
    // const { path, url } = useRouteMatch();
    const router = useRouting();

    const prepareJsx = () => {
        return projects.map((project, index) => (
            <div key={index}>
                <ProjectItem
                    onClick={() => {
                        router.navigate(project._id);
                    }}
                    project={project}
                />
            </div>
        ));
    };
    return (
        <>
            <div>
                <Searchbox className={styles.searchBar} placeholder="Search all projects .." loading={false} />
            </div>
            <div className={styles.createButton}>
                <AppButton size="large" onClick={openCreate}>
                    Create Project
                </AppButton>
            </div>
            <div className={styles.project}>{prepareJsx()}</div>
            <AppModal visible={create} handleCancel={closeCreate}>
                <Card bordered={false} cover={<img alt="under construction" src={assetMap("comingsoon")} />}>
                    <Meta title="Coming soon..." />
                </Card>
            </AppModal>
        </>
    );
};

Projects.propTypes = {};

export default Projects;
