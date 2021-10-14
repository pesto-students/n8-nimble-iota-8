/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import styles from "src/components/Page/Home/Home.module.less";
import { Typography } from "antd";
import { ChangeImage, loadProjects, LogoutUser } from "src/redux";
import NavBar from "src/components/Common/NavBar/NavBar";
import Sidebar from "src/components/Common/Sidebar/Sidebar";
import AppModal from "src/components/Common/AppModal/AppModal";
import ResetPswd from "src/components/Auth/ResetPassword";
import Retrospectives from "src/components/Page/Retrospectives/Retrospectives";

import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Projects from "src/components/Page/Projects/Projects";
import Project from "src/components/Page/Project/Project";
import { Redirect } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

function Home() {
    const { Text } = Typography;
    const { email, img } = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [image, setImage] = useState(null);

    const [resetModal, setResetModal] = useState(false);
    const openReset = () => setResetModal(true);
    const closeReset = () => setResetModal(false);
    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleUpload = () => {
        dispatch(ChangeImage(image, email, "profile-image"));
    };

    useEffect(() => {
        dispatch(loadProjects());
    }, []);

    const handleLogout = () => dispatch(LogoutUser());

    const { path, url } = useRouteMatch();
    console.log(path, url, "j");
    return (
        <div>
            <NavBar onLogout={handleLogout} />
            <section className={styles.body}>
                <Sidebar />
                <main className={styles.mainContent}>
                    <Switch>
                        <Route exact path={path}>
                            <Projects />
                        </Route>
                        <Route path={`${path}/:projectId`}>
                            <Project />
                        </Route>
                    </Switch>
                </main>
            </section>
        </div>
    );
}

export default Home;
