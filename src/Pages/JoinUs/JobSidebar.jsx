import React, { useState, useEffect } from 'react';
import { Drawer, Button, Menu } from 'antd';
import {MenuOutlined, CloseOutlined} from '@ant-design/icons';
import './JobSidebar.css';
import data from '../../../public/assets/data/jobs2.json';


const JobSidebar = ({ setSelectedJob, selectedJob }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileDrawerVisible, setMobileDrawerVisible] = useState(false);
  const jobs = data.jobs;

  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 768;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setMobileDrawerVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredJobs = searchTerm
    ? jobs.filter(job => job.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : jobs;

  const handleJobClick = jobId => {
    const id = parseInt(jobId, 10);
    const job = jobs.find(job => job.id === id);
    setSelectedJob(job);
    if (isMobile) setMobileDrawerVisible(false);
  };

  const SidebarContent = (
    <>
      {/* <input                                                  //uncomment if searchbar is needed
        type="text"
        placeholder="Search jobs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="sidebarSearch"
      /> */}
      <Menu
        mode="inline"
        selectedKeys={[selectedJob?.id?.toString()]}
        onClick={({ key }) => handleJobClick(key)}
      >
        {filteredJobs.map(job => (
          <Menu.Item key={job.id.toString()}>
            {job.title}
          </Menu.Item>
        ))}
      </Menu>
    </>
  );

  return (
    <>
      {isMobile && (
        <Button className="sidebarMenuButton" type="primary" 
        icon={mobileDrawerVisible ? <CloseOutlined style={{ color: 'white', background: "transparent"}} /> : <MenuOutlined style={{ color: 'black' }} />}
        onClick={() => setMobileDrawerVisible(!mobileDrawerVisible)} />
      )}
      {isMobile ? (
        <Drawer
          title="Job Listings"
          placement="left"
          closable={true}
          onClose={() => setMobileDrawerVisible(false)}
          open={mobileDrawerVisible}
          bodyStyle={{ padding: 0 }}
          width={250}
        >
          {SidebarContent}
        </Drawer>
      ) : (
        <div className="desktop-sidebar">
          {SidebarContent}
        </div>
      )}
    </>
  );
};

export default JobSidebar;
