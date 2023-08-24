import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Homepagerow from './Homepagerow';

const Home = () => {
    const [bookmarks, setBookmarks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getTopTopFiveBookmarks = async () => {
            const { data } = await axios.get('/api/bookmark/gettop5');
            setBookmarks(data);
            setIsLoading(false);
            //console.log(data)
        };
        getTopTopFiveBookmarks();
    }, []);
    //console.log(bookmarks)

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <h1>Welcome to the React Bookmark Application.</h1>
            <h3>Top 5 most bookmarked links</h3>
            <table className="table table-hover table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Url</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {bookmarks.map(b => (
                        <Homepagerow
                            key={b.id}
                            bookmark={b}
                        />
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default Home;
