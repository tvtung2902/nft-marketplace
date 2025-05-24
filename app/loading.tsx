import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';


export default function Loading() {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <Spin indicator={<LoadingOutlined style={{ fontSize: 48, color: '#A259FF' }} spin />} />
        </div>
    );
}
