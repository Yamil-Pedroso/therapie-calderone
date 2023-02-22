import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlay } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

function MyVideo(props) {
  return (
    <div style={{ position: "relative"}}>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div style={{backgroundColor: "#043053", display: "flex", flexDirection: "column",alignItems: "center", padding: "2.5rem"}}>
          <div>
             <p style={{fontSize: "2em", fontWeight: "600", color: "#fff"}}>Advanced Care Planning</p>
          </div>
          <div>
            <video width="720" height="640" controls>
                <source src="/assets/videos/Video.mp4" alt="Video" type="video/mp4" />
            </video>
          </div>
          <div style={{ position: "absolute", right: "-30px", top: "-30px", zIndex: "1", cursor: "pointer" }}>
            <div onClick={props.onHide}>
              <FaTimes style={{fontSize: "1.8rem", marginLeft: "0.3rem"}} />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className=""
      style={{
              display: "flex",
              flexDirection:"column",
              justifyContent:"center",
              alignItems:"center",
              width: "40rem",
              height: "30rem",
              background:"#bdbac1",
              borderRadius: "0.5rem",
              backgroundImage: "url(/assets/images/bg/claudia-1.jpeg)"
        }}
      >
       <h2 className="" style={{fontSize: "3.5em", color:"#fff"}}>
        Erfahren mehr über
       </h2>
         <h4 style={{color: "#fff"}}>ACP "Advanced Care Planning"</h4>
      <Button onClick={() => setModalShow(true)}
         style={{
           borderRadius:"50%",
           width: "6rem",
           height:"6rem",
           backgroundColor: "#00a9ba",
           border: "none",
          }}
        >
        <FaPlay style={{fontSize: "1.8rem", color: "#fff", marginLeft: "0.3rem"}} />
      </Button>

      <MyVideo
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

// popup modal video with usestate

const Media = () => {

  return (
    <Container style={{display: "flex", marginTop: "10rem" }}>
       <div>
         {App()}
       </div>
      <div style={{margin:"0 7rem"}}>
        <h2 style={{fontSize: "2rem"}}>Advanced Care Planning</h2>
        <p style={{fontSize: "1.2rem", color: "#6c757d"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          nunc eu nisl ultrices, nec ultricies nisl aliquam. Nullam euismod
          tincidunt nisl, sit amet aliquam nisl. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        </p>
      </div>
    </Container>
  )
}

export default Media
