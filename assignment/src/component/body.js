import React from 'react';
import {  MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBFooter } from 'mdbreact';

const CardExample = () => {
  const [firstName, setFirstName] = React.useState(null);
  const [lastName, setLastName] = React.useState(null);
  
  React.useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then(results => results.json())
      .then(data => {
        const {name} = data.results[0];
        setFirstName(name.first);
        setLastName(name.last);
      });
  }, []);
  return (

    <div className="col-sm-12">

      {/* start of 1st section */}

      <MDBRow>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1518707606293-6274eadcf07d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" waves />
            <MDBCardBody>
              <MDBCardTitle>Psithurism</MDBCardTitle>
              <MDBCardText>
                When the wind rustles the leaves, the trees seem to be whispering the secret&apos;s content.
                Name: {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
        </MDBCardText>
            </MDBCardBody>
            <MDBFooter style={{ backgroundColor: "#DCDEDE" }}>
              <p className="red-text">Jadav Payeng</p>
              <div id="textbox">
                <p className="alignleft" style={{float: "left"}}>1234 5677 8910</p>
                <p className="alignright" style={{float: "right"}}>More..</p>

              </div>
            </MDBFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1518707606293-6274eadcf07d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" waves />
            <MDBCardBody>
              <MDBCardTitle>Smultronställe</MDBCardTitle>
              <MDBCardText>
                In Swedish, a smultronställe is a small. Imagine a pretty place in the wildernes&apos;s content.
                Name: {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
        </MDBCardText>
            </MDBCardBody>
            <MDBFooter style={{ backgroundColor: "#DCDEDE" }}>
              <p className="red-text">Sumaira Abdulali</p>
              <div id="textbox">
                <p className="alignleft" style={{float: "left"}}>1234 5677 8910</p>
                <p className="alignright" style={{float: "right"}}>More..</p>
              </div>
            </MDBFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1551863646-78ede6cd1284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" waves />
            <MDBCardBody>
              <MDBCardTitle>Petrichor</MDBCardTitle>
              <MDBCardText>
                he word’s origins are Greek, the blood of mythological god&apos;s content.
                Name: {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
        </MDBCardText>
            </MDBCardBody>
            <MDBFooter style={{ backgroundColor: "#DCDEDE" }}>
              <p className="red-text">Norma Alvares</p>
              <div id="textbox">
                <p className="alignleft" style={{float: "left"}}>1234 5677 8910</p>
                <p className="alignright" style={{float: "right"}}>More..</p>
              </div>
            </MDBFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      {/* ending of 1st section */}

      <br></br>

      {/* start of 2nd section */}

      <MDBRow>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1545153996-5b13927c717c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" waves />
            <MDBCardBody>
              <MDBCardTitle>Apricate</MDBCardTitle>
              <MDBCardText>
                Apricate is a verb that English inherited from Latin, and it means to bask in the sun&apos;s content.
                Name: {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
        </MDBCardText>
            </MDBCardBody>
            <MDBFooter style={{ backgroundColor: "#DCDEDE" }}>
              <p className="red-text"> Claude Alvares</p>
              <div id="textbox">
                <p className="alignleft" style={{float: "left"}}>1234 5677 8910</p>
                <p className="alignright" style={{float: "right"}}>More..</p>
              </div>
            </MDBFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1589134607062-f87daad62251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" waves />
            <MDBCardBody>
              <MDBCardTitle>Moonglade and Moonwake</MDBCardTitle>
              <MDBCardText>
                You might see moonglade in the lines by Edgar able to add the context Rice Burrough&apos;s content.
                Name: {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
        </MDBCardText>
            </MDBCardBody>
            <MDBFooter style={{ backgroundColor: "#DCDEDE" }}>
              <p className="red-text">Sarla Behn</p>
              <div id="textbox">
                <p className="alignleft" style={{float: "left"}}>1234 5677 8910</p>
                <p className="alignright" style={{float: "right"}}>More..</p>
              </div>
            </MDBFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage className="img-fluid" src="https://images.unsplash.com/photo-1527928159272-7d012024eb74?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" waves />
            <MDBCardBody>
              <MDBCardTitle>Ammil</MDBCardTitle>
              <MDBCardText>
                Ammil comes from the Old English term for enamel. Now the word refer&apos;s content.
                Name: {!firstName || !lastName ? 'Loading...' : `${firstName} ${lastName}`}
        </MDBCardText>
            </MDBCardBody>
            <MDBFooter style={{ backgroundColor: "#DCDEDE" }}>
              <p className="red-text">Indira Chakravarty</p>
              <div id="textbox">
                <p className="alignleft" style={{float: "left"}}>1234 5677 8910</p>
                <p className="alignright" style={{float: "right"}}>More..</p>
              </div>
            </MDBFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <br></br>

      {/* end of 2nd section */}

    </div>

  )
}

export default CardExample;