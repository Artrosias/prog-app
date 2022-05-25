import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function MyButtons() {
  return (
    <>
      <MDBBtn>Primary</MDBBtn>
      <MDBBtn className='mx-2' color='secondary'>
        Secondary
      </MDBBtn>
      <MDBBtn color='success'>Success</MDBBtn>
      <MDBBtn className='mx-2' color='danger'>
        Danger
      </MDBBtn>
      <MDBBtn color='warning'>Warning</MDBBtn>
      <MDBBtn className='mx-2' color='info'>
        Info
      </MDBBtn>
      <MDBBtn className='text-dark' color='light'>
        Light
      </MDBBtn>
      <MDBBtn className='mx-2' color='dark'>
        Dark
      </MDBBtn>
      <MDBBtn color='link'>Link</MDBBtn>
    </>
  );
}