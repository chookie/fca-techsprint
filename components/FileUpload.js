import { FilePond, File, registerPlugin } from 'react-filepond';
import { Component } from 'react';

// Import FilePond styles
// import 'filepond/dist/filepond.min.css';

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
//
// Register the plugins
// registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set initial files
      files: []
    };
  }

  handleInit() {
    console.log('FilePond instance has initialised', this.pond);
  }

  render() {
    return (
      <div>

        {/* Pass FilePond properties as attributes */}
        <FilePond ref={ref => this.pond = ref}
                  allowMultiple={true}
                  maxFiles={3}
                  oninit={() => this.handleInit() }
                  onupdatefiles={(fileItems) => {
                    // Set current file objects to this.state
                    this.setState({
                      files: fileItems.map(fileItem => fileItem.file)
                    });
                  }}>

          {this.state.files.map(file => (
            <File key={file} src={file} origin="local" />
          ))}

        </FilePond>
        <style jsx>{`
          :global(.filepond--wrapper) {
            height: 70px;
          }
        `}</style>
      </div>
    );
  }
}
