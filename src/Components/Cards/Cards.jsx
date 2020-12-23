import React from "react"
import styles from "./Cards.module.css"
import { Card, CardContent, Grid, Typography} from "@material-ui/core"
import CountUp from "react-countup"
import cx from "classnames"
import CircularProgress from '@material-ui/core/CircularProgress'

const Cards = ({data :{confirmed, recovered, deaths, lastUpdate}}) => {
    while(confirmed == null)
    return (
        <CircularProgress />
    )
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography style={{color:"blue"}} gutterBottom><b><u>INFECTED</u></b></Typography>
                        <Typography variant="h6">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography><br />
                        <Typography variant="body2" style={{color: "rgba(0,0,255,0.5)"}}>Total number of cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography style={{color: "green"}} gutterBottom ><b><u>RECOVERED</u></b></Typography>
                        <Typography variant="h6">
                        <CountUp
                                start={0}
                                end={recovered.value}
                                duration={1.5}
                                separator=","
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography><br />
                        <Typography variant="body2" style={{color: "green"}}>Number of cases recovered from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography gutterBottom style={{color: "red"}}><b><u>DEATHS</u></b></Typography>
                        <Typography variant="h6">
                        <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1.5}
                                separator=","
                                
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography><br />
                        <Typography variant="body2" style={{color:"rgba(255,0,0,0.5)"}}>Number of deaths from COVID-19</Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    ) 
}

export default Cards