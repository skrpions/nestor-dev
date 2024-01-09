import { ColorRing } from 'react-loader-spinner'
import { MutatingDots } from 'react-loader-spinner'



function Spinner() {

    return (
        <>
            <div className="app-container">

                {/* <InfinitySpin
                    visible={true}
                    width="200"
                    color="#0b8cc3"
                    ariaLabel="infinity-spin-loading"
                /> */}

                <MutatingDots
                    visible={true}
                    height="100"
                    width="100"
                    color="#0b8cc3"
                    secondaryColor="#0b8cc3"
                    radius="12.5"
                    ariaLabel="mutating-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />

                {/* <ColorRing
                    height="80"
                    width="80"
                    colors={['#013440', '#55C1D9', '#026873', '#77E6F2', '#038C8C']}
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    visible={true}
                /> */}
            </div>


        </>
    );
}

export default Spinner;