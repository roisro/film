import React, {Component} from 'react'
import {Carousel} from 'react-responsive-carousel'
import axios from 'axios'
import {connect} from 'react-redux'
import { Card, Icon, Image, Grid} from 'semantic-ui-react'


// menit : 05.47

class Home extends Component {
    constructor () {
        super();
        this.state = {
            dataCarausel:[],
            loading:true,
            dataSchedule:[]
        }
    }

    getDataCarausel = async () => {
        try {
            await axios.get(`http://api.tvmaze.com/shows`,{crossDomain:true})
            .then ( (res) => {
                let sorted = res.data.sort(function(a,b){
                    return a.rating.average < b.rating.average ? 1 :
                    b.rating.average < a.rating.average ? -1 :0
                })

                let dataRes =sorted.slice(0,10)

                this.setState({
                    dataCarausel:dataRes,
                    
                })
            })
        }
        catch(error){
            alert (JSON.stringify(error.message))
        }
    }

    // Ambil Data Schedule
    getDataSchedule = async () => {
        try {
            await axios.get(`http://api.tvmaze.com/schedule`,{crossDomain:true})
            .then ( (res) => {
            // console.log(res.data)
               let dataRes =res.data
                this.setState({
                    dataSchedule:dataRes,
                    loading:false
                })
            })
        }
        catch(error){
            alert (JSON.stringify(error.message))
        }
    }



    componentDidMount = async () => {
        await this.getDataCarausel()  
        await this.getDataSchedule()
    }


    render () {
        return (
            <>

                {this.state.loading ? (<h1>Loading2....</h1>) :(
                    <div>
                <Carousel autoPlay centerMode centerSlidePercentage={40} showStatus="false">
                    {this.state.dataCarausel.map((data,key)=>{
                        return(
                        <div key={key}>
                            <img style={{height:"auto", width:"40%"}} alt={data.name} src={data.image.medium} />
                            <p className="legend">{data.name} </p>
                            {/* <p className="legend">{data.rating.average} </p> */}
                        </div>
                        )
                    } 
                )} 
                </Carousel>

                <Grid columns={5} divided>
                {this.state.dataSchedule.map((data,key)=>{
                    let gambar = {...data.show.image}
                    let rating = {...data.show.rating}

                        if (data.show.medium === null){
                            gambar='https://cdn.pixabay.com/photo/2019/03/18/13/40/eye-4063134_960_720.jpg'
                        } 
                        else {
                            gambar = gambar.medium
                        }

                        if (rating.average === null){
                            rating=0
                        } 
                        else {
                            rating = rating.average
                        }
                        
                    return(
                    <Grid.Column key={key}>
                    <Card>
                            <Image src={gambar} wrapped ui={false} />
                            <Card.Content>
                            <Card.Header>{data.show.name}</Card.Header>
                            <Card.Meta>
                                Eps : {data.name}
                            </Card.Meta>
                            <Card.Meta>
                                Status : {data.show.status}
                            </Card.Meta>
                            <Card.Description>
                                AirTime : {data.show.schedule.time}
                            </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                            <h2>
                                <Icon name='star' />
                                {rating}
                            </h2>
                            </Card.Content>
                    </Card>

                    </Grid.Column>
                    ) 
                    } ) }
                </Grid>

                </div>
                )}
            </>
        )
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
       type : "ACTIVE_ITEM", ActiveItem: "home"
    }
  }



export default connect (null, mapDispatchtoProps) (Home);