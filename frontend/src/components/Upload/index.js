import React, { Component } from 'react';

import Dropzone from 'react-dropzone';
import { DropContainer, UploadMesage } from './styles';

export default class Upload extends Component {

  renderDrageMessage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMesage>Arraste arquivos aqui ...</UploadMesage>
    }

    if (isDragReject) {
      return <UploadMesage type="error">Arquivo não suportado</UploadMesage>
    }

    return <UploadMesage type="success">Solte os arquivos aqui</UploadMesage>
  }

  render() {
    const { onUpload } = this.props;

    return(
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive}
            isDragReject={isDragReject}
          >
            <input {...getInputProps()} />
            { this.renderDrageMessage(isDragActive, isDragReject) }
          </DropContainer>
        ) }
      </Dropzone>
    );
  }
}