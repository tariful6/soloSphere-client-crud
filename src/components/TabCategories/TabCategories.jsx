import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCart from '../JobCart/JobCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
const TabCategories = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_APP_URL}/jobs`);
            setJobs(data)
        }
        getData()

    }, [])
    return (

        <Tabs>
            <div className='container mx-auto px-6 py-10'>
                <div className=' text-center w-6/12 mx-auto'>
                    <h2 className=' text-3xl font-bold mb-5'>Brows jobs By Categories</h2>
                    <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, quidem? Laudantium in sequi labore cum harum ipsa nam libero quod quia! Eveniet ducimus incidunt nihil.</p>
                </div>

                <div className=' flex justify-center items-center'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>

                    <div className=' grid grid-cols-3 gap-6 py-6'>
                        {

                            jobs.filter(j => j.category === 'Web Development').map(job => <JobCart key={job._id} job={job}></JobCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className=' grid grid-cols-3 gap-6 py-6'>
                        {

                            jobs.filter(j => j.category === 'Graphics Design').map(job => <JobCart key={job._id} job={job}></JobCart>)
                        }
                    </div>

                </TabPanel>
                <TabPanel>
                    <div className=' grid grid-cols-3 gap-6 py-6'>
                        {

                            jobs.filter(j => j.category === 'Digital Marketing').map(job => <JobCart key={job._id} job={job}></JobCart>)
                        }
                    </div>

                </TabPanel>
            </div>

        </Tabs>

    );
};

export default TabCategories;