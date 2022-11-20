import React ,{ Component, Fragment }from "react";
import { TbMassage } from "react-icons/tb";

const ServiceList = [
    {
        icon:<TbMassage />,
        title: 'Meine Therapie 1',
        description: 'Dabei wird der Transport der Lymphflüssigkeit in den Lymphgefäßen durch sanfte Grifftechniken angeregt.'
    },
    {
        icon: <TbMassage />,
        title: 'Meine Therapie 2',
        description: 'Dabei wird der Transport der Lymphflüssigkeit in den Lymphgefäßen durch sanfte Grifftechniken angeregt.'
    },
    {
        icon: <TbMassage />,
        title: 'Meine Therapie 3',
        description: 'Dabei wird der Transport der Lymphflüssigkeit in den Lymphgefäßen durch sanfte Grifftechniken angeregt.'
    },
    {
        icon: <TbMassage />,
        title: 'Meine Therapie 4',
        description: 'Dabei wird der Transport der Lymphflüssigkeit in den Lymphgefäßen durch sanfte Grifftechniken angeregt.'
    },
    {
        icon: <TbMassage />,
        title: 'Meine Therapie 5',
        description: 'Dabei wird der Transport der Lymphflüssigkeit in den Lymphgefäßen durch sanfte Grifftechniken angeregt.'
    },
    {
        icon: <TbMassage />,
        title: 'Meine Therapie 6',
        description: 'Dabei wird der Transport der Lymphflüssigkeit in den Lymphgefäßen durch sanfte Grifftechniken angeregt.'
    }
]


class TherapyServices extends Component{
    render(){
        const { column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);

        return(
            <Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href="#">
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default TherapyServices;
