import Banner from "./Banner";
import FollowBlog from "./FollowBlog";
import Newsletter from "./NewsLetter";
import RecentBlogs from "./RecentBlogs";
import TipsAndTricks from "./TipsAndTricks";

const Home = () =>{
    return(
        <div>
        <Banner></Banner>
        <RecentBlogs></RecentBlogs>
        <Newsletter></Newsletter>
        <TipsAndTricks></TipsAndTricks>
        <FollowBlog></FollowBlog>
        </div>
    );
};

export default Home;