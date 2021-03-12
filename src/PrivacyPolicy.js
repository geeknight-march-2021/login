import React from 'react';
import Modal from 'react-modal';
import Link from "@material-ui/core/Link"
import Button from "@material-ui/core/Button"

import { Typography } from "@material-ui/core";
Modal.setAppElement('#root');
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: '1rem',
    transform: 'translate(-50%, -50%)'
  }
};

function PrivacyPolicy(props) {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function closeModal(){
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <Typography display="block" variant="caption">
      <Link onClick={openModal} display="block">Read our Privacy Policy</Link>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor, neque at mollis blandit, dolor mi tristique elit, nec tempor diam est a felis. Curabitur lobortis ante quis libero placerat, tempor aliquet dolor euismod. Maecenas vitae cursus ipsum. Aenean dignissim vehicula efficitur. Nullam mollis risus vel dignissim sagittis. Aliquam ultricies, mauris quis faucibus consectetur, eros odio malesuada nisl, nec finibus dui magna vel felis. Integer ornare, tellus dignissim posuere mattis, sem elit fringilla lectus, eget efficitur tellus purus id tellus. Duis ligula urna, ultricies id condimentum id, blandit in sem. Aenean aliquam placerat imperdiet. Nulla sit amet mollis leo. Nulla facilisi.
        </p>

        <p>
          Nulla dictum et lorem nec fermentum. Morbi sagittis mi et magna bibendum rutrum. Vestibulum sit amet congue massa. Morbi mattis est non elit semper, vitae pellentesque erat scelerisque. Mauris porta pharetra nisi, vel viverra ante dictum volutpat. Vivamus tincidunt ornare eros, id molestie mi eleifend vel. Donec molestie sem ut feugiat facilisis. Nullam sodales arcu ut orci efficitur, cursus bibendum turpis porttitor. Aliquam eu faucibus nisl. Nullam lobortis ullamcorper aliquet. Phasellus accumsan vehicula massa in tempus. Aliquam velit ex, lobortis ac facilisis quis, cursus sit amet quam. Nulla tristique facilisis dolor sit amet maximus.
        </p>
        <p>
          Fusce quis lacinia nunc. Phasellus nibh urna, lobortis id porta vel, sodales nec ex. Praesent id ex nec massa blandit eleifend a vitae erat. Maecenas vitae tellus sed enim luctus scelerisque eget ac est. Pellentesque consectetur magna nec mauris viverra, sed suscipit ipsum vulputate. Sed dolor sem, tempus ac quam id, consectetur scelerisque leo. Sed blandit, sapien eget ultrices tempor, sapien eros condimentum augue, a rutrum dui magna vitae risus. Etiam maximus feugiat nisi ut lobortis. Maecenas sit amet nibh lectus. Morbi facilisis dui tempor faucibus volutpat. Fusce quis dui egestas tellus molestie luctus.
        </p>
        <Button variant="contained" color="primary" onClick={closeModal}>Close</Button>
      </Modal>
    </Typography>
  );
}
export default PrivacyPolicy;