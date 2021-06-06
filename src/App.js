import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import "./App.css";
import ResponsiveDrawer from "./TemporaryDrawer.js";

const countriesURL = "https://restcountries.eu/rest/v2/all";

const drawerWidth = 240;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  countryName:{
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',

  },
});

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [currentData, setCurrentData] = useState({});
  const classes = useStyles();

  const getCountriesWithAxios = async () => {
    const response = await axios.get(countriesURL);
    setCountriesData(response.data);
    setCountriesData(response.data);
  };

  useEffect(() => {
    getCountriesWithAxios();
  }, []);

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <TableContainer component={Paper}>
            <Table stickyHeader  className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                
                  <TableCell>
                    <strong>Name</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Flag</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Capital</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Population</strong>
                  </TableCell>
                  <TableCell align="right">
                    <strong>Region</strong>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {countriesData.map((country) => (
                  <TableRow>
                    <TableCell className={classes.countryName} component="th" scope="row" onClick={()=>{ setCurrentData(country) }}>
                      {country.name}
                    </TableCell>
                    <TableCell align="right">
                      <img src={country.flag} alt="" width="32px" />
                    </TableCell>
                    <TableCell align="right">{country.capital}</TableCell>
                    <TableCell align="right">{country.population}</TableCell>
                    <TableCell align="right">{country.region}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      {currentData?.name && <ResponsiveDrawer close={()=>setCurrentData({})} data={currentData} open={true} />}
    </>
  );
}

export default App;
