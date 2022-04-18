import { Component, OnInit, ElementRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Gallery, GalleryItem, GalleryRef, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  public teamTravelerIsShown: boolean = false;
  public mauticMonitoringIsShown: boolean = false;
  public portfolioIsShown: boolean = false;
  public pokedexIsShown: boolean = false;
  public riddleIsShown: boolean = false;
  public venobox: any;

  imageData = data;

  images: GalleryItem[] = [];

  items: GalleryItem[] = [];

  constructor(private elementRef: ElementRef, public gallery: Gallery, public lightbox: Lightbox) { }

  ngOnInit(): void {
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));

    const lightboxRef: GalleryRef = this.gallery.ref('lightbox');

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Bottom
    });

    lightboxRef.load(this.items);
  }

  ngAfterViewInit(): void {
    this.onMouse("portfolio-link", "portfolio-img");
    this.onMouse("teamTraveler-link", "teamTraveler-img");
    this.onMouse("mautic-link", "mautic-img");
    this.onMouse("pokedex-link", "pokedex-img");
    this.onMouse("riddle-link", "riddle-img");
  }

  openInFullScreen(index: number) {
    this.lightbox.open(0, 'lightbox', { panelClass: 'fullscreen' })
  }

  detailOnClick(project: String) {
    if (project == "teamTraveler") {
      this.teamTravelerIsShown = !this.teamTravelerIsShown;
      this.mauticMonitoringIsShown = false;
      this.portfolioIsShown = false;
      this.pokedexIsShown = false;
      this.riddleIsShown = false;
    }
    else if (project == "mauticMonitoring") {
      this.mauticMonitoringIsShown = !this.mauticMonitoringIsShown;
      this.teamTravelerIsShown = false;
      this.portfolioIsShown = false;
      this.pokedexIsShown = false;
      this.riddleIsShown = false;
    }
    else if (project == "portfolio") {
      this.portfolioIsShown = !this.portfolioIsShown;
      this.teamTravelerIsShown = false;
      this.mauticMonitoringIsShown = false;
      this.pokedexIsShown = false;
      this.riddleIsShown = false;
    }
    else if (project == "pokedex") {
      this.pokedexIsShown = !this.pokedexIsShown;
      this.teamTravelerIsShown = false;
      this.mauticMonitoringIsShown = false;
      this.portfolioIsShown = false;
      this.riddleIsShown = false;
    }
    else if (project == "riddleIsShown") {
      this.riddleIsShown = !this.riddleIsShown;
      this.teamTravelerIsShown = false;
      this.mauticMonitoringIsShown = false;
      this.portfolioIsShown = false;
      this.pokedexIsShown = false;
    }
  }

  onMouse(idLink: String, idImage: String) {
    let elImage = this.elementRef.nativeElement.querySelector(`#${idImage}`);
    let elLink = this.elementRef.nativeElement.querySelector(`#${idLink}`);

    elLink.addEventListener("mouseenter", () => {
      elImage.style.opacity = 0.3;
      elLink.style.opacity = 1;
    });

    elLink.addEventListener("mouseleave", () => {
      elImage.style.opacity = 1;
      elLink.style.opacity = 0;
    });
  }

}

const data = [
  {
    srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
  },
  {
    srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
  }
];