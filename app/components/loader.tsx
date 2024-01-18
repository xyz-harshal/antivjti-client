import { Bars } from "react-loader-spinner"
export default function LoaderSpinner() {
    return (
        <div className="flex flex-row justify-center items-center">
            <Bars
                height="100"
                width="100"
                color="white"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>

    )
}