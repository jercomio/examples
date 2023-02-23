import Gallery from './Elements/Gallery';
import Header from './Elements/Header';
import Body from './Elements/Body';
import ActionsBar from './Elements/ActionsBar';
import './Elements/index.css';

const DevCard = () => {

    return (
        <div className='card-container m-[1vw]'>
            <div className='flex-content card-dimension my-0 mx-auto p-2 bg-slate-900 rounded-xl shadow-md'>
                <Header />
                <Body />
                {/* <Gallery /> */}
                <ActionsBar />
            </div>
        </div>
    );
};

export default DevCard;