import { ZombieRoomPage } from './app.po';

describe('zombie-room App', function() {
  let page: ZombieRoomPage;

  beforeEach(() => {
    page = new ZombieRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
