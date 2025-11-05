import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 overflow-hidden"
      style={{ backgroundColor: "#499fa4" }}
    >
      <div
        className="w-full max-w-7xl h-[80vh] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
        style={{ backgroundColor: "#f8f7fc" }}
      >
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
