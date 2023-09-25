import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.scss']
})
export class InfoContentComponent {
  @Input() activeTab: string = "Download/ Upload";
search = {
  p1: `<input type="text" placeholder="Search..." [formControl]="searchControl">
  <ul *ngIf="showResults">
    <li *ngFor="let result of results">{{ result }}</li>
  </ul>`,
  p2: `  this.searchControl.valueChanges 

  .pipe( 

    debounceTime(300), // Wait for 300ms pause in events

    distinctUntilChanged(), // Ignore if the value hasn't changed

    switchMap((searchTerm) => this.search(searchTerm)) // Execute the search function
  )
  .subscribe((results) => {
    this.results = results;
    this.showResults = true;
  });
}

search(searchTerm: string): Observable<string[]> {
// Implement your search logic here
// This function should return an Observable of search results
// Replace this with your actual data fetching logic
const mockResults = ['Result 1', 'Result 2', 'Result 3'];
return new Observable((observer) => {
  observer.next(mockResults);
});
}`
}
dwn = {
  p1: `<form (ngSubmit)="uploadFile()" #fileUploadForm="ngForm">
  <input type="file" #fileInput (change)="onFileSelect($event)" accept=".pdf, .doc, .docx">
  <button type="submit">Upload File</button>
</form>`,
p2:` @ViewChild('fileInput') fileInput!: ElementRef;

selectedFile: File | null = null;

onFileSelect(event: any) {
  this.selectedFile = event.target.files[0];
}

uploadFile() {
  if (this.selectedFile) {
    // Implement file upload logic here (e.g., use a service to upload the file to a server)
    // You can use Angular's HttpClient for HTTP POST requests.
    // Example: https://angular.io/guide/http#making-a-post-request

    // After successful upload, you can reset the form and clear the selected file:
    this.fileInput.nativeElement.value = '';
    this.selectedFile = null;
  }
}`,
p3: `const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

app.use(fileUpload());

app.post('/upload', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }

  const uploadedFile = req.files.file;
  const uploadPath = __dirname + '/uploads/' + uploadedFile.name;

  uploadedFile.mv(uploadPath, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send('File uploaded!');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});`,
p4: ` downloadFile(): Observable<Blob> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  return this.http.get(this.downloadUrl, {
    responseType: 'blob',
    headers: headers,
  });
}
}`,
p5: `downloadFile() {
  this.fileDownloadService.downloadFile().subscribe((data) => {
    const blob = new Blob([data], { type: 'application/pdf' }); // Set the correct MIME type
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'example.pdf'; // Set the desired file name
    a.click();
  });
}`
}

}
