import MusicList from '../components/dashboard/MusicList';
import SideBar from '../components/dashboard/Sidebar';

const Dashboard = () => {
	return (
		<>
			<div className="max-h-screen flex">
				<SideBar />
        <div className="bg-solid-black w-full p-10 overflow-y-auto">
					<MusicList />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
