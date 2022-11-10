"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
class Map {
    constructor(canvas) {
        this.canvas = canvas;
        this.image = new Image();
        this.ratioX = 0;
        this.ratioY = 0;
        this.scaleR = 0;
        this.scaleX = 0;
        this.scaleY = 0;
        this.shiftX = 0;
        this.shiftY = 0;
        this.context = canvas.getContext('2d');
    }
    refresh(levelName) {
        this.prepare(levelName);
        this.update();
        this.renderBackground();
    }
    renderItems(items, itemSet) {
        for (const item of items) {
            if (!itemSet.has(item.customScriptInt.value))
                continue;
            const position = this.calculatePosition(item.localOrigin);
            if (position) {
                this.context.beginPath();
                this.context.arc(position.x, position.y, this.scaleR * 4, 0, Math.PI * 2);
                this.context.fillStyle = '#FFF';
                this.context.fill();
            }
        }
    }
    renderPlayers(localPlayer, players) {
        for (const player of players) {
            if (!player.isValid)
                continue;
            const position = this.calculatePosition(player.localOrigin);
            if (position) {
                this.context.beginPath();
                this.context.arc(position.x, position.y, this.scaleR * 8, 0, Math.PI * 2);
                this.context.fillStyle = player.createColor(localPlayer);
                this.context.fill();
            }
        }
    }
    calculatePosition(localOrigin) {
        if (this.map) {
            const x = this.shiftX + (1 / this.image.width * this.scaleX) * (localOrigin.value.x - this.map.x) / this.ratioX;
            const y = this.shiftY + (1 / this.image.height * this.scaleY) * (localOrigin.value.y - this.map.y) / -this.ratioY;
            return { x, y };
        }
        else {
            return;
        }
    }
    prepare(levelName) {
        this.map = getDataByLevelName(levelName);
        this.image.src = this.map ? `images/maps/${levelName}.webp` : 'images/maps.webp';
    }
    renderBackground() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(this.image, 0, 0, this.image.width, this.image.height, this.shiftX, this.shiftY, this.scaleX, this.scaleY);
    }
    update() {
        this.ratioX = this.map ? (this.map.y - this.map.x) / this.image.width : 0;
        this.ratioY = this.map ? (this.map.y - this.map.x) / this.image.height : 0;
        this.scaleR = Math.min(this.canvas.width / this.image.width, this.canvas.height / this.image.height);
        this.scaleX = this.image.width * this.scaleR;
        this.scaleY = this.image.height * this.scaleR;
        this.shiftX = (this.canvas.width - this.scaleX) / 2;
        this.shiftY = (this.canvas.height - this.scaleY) / 2;
    }
}
exports.Map = Map;
function getDataByLevelName(levelName) {
    switch (levelName) {
        case 'mp_rr_canyonlands_mu3':
            return { x: -37541, y: 43886 };
        case 'mp_rr_desertlands_mu3':
            return { x: -45056, y: 45055 };
        case 'mp_rr_olympus_mu2':
            return { x: -52024, y: 48025 };
        case 'mp_rr_tropic_island_mu1':
            return { x: -50606, y: 52139 };
        default:
            return;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9mZWF0dXJlcy9NYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUEsTUFBYSxHQUFHO0lBWWQsWUFDbUIsTUFBeUI7UUFBekIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFYM0IsVUFBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFFN0IsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUlqQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELE9BQU8sQ0FBQyxTQUFpQjtRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBOEIsRUFBRSxPQUFvQjtRQUM5RCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztnQkFBRSxTQUFTO1lBQ3ZELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUQsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxH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QUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwSSxDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQTlFRCxrQkE4RUM7QUFFRCxTQUFTLGtCQUFrQixDQUFDLFNBQWlCO0lBQzNDLFFBQVEsU0FBUyxFQUFFO1FBQ2pCLEtBQUssdUJBQXVCO1lBQzFCLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQy9CLEtBQUssdUJBQXVCO1lBQzFCLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQy9CLEtBQUssbUJBQW1CO1lBQ3RCLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQy9CLEtBQUsseUJBQXlCO1lBQzVCLE9BQU8sRUFBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBQyxDQUFDO1FBQy9CO1lBQ0UsT0FBTztLQUNWO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFwcCBmcm9tICcuJztcblxuZXhwb3J0IGNsYXNzIE1hcCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIHJlYWRvbmx5IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIHByaXZhdGUgbWFwPzogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0RGF0YUJ5TGV2ZWxOYW1lPjtcbiAgcHJpdmF0ZSByYXRpb1ggPSAwO1xuICBwcml2YXRlIHJhdGlvWSA9IDA7XG4gIHByaXZhdGUgc2NhbGVSID0gMDtcbiAgcHJpdmF0ZSBzY2FsZVggPSAwO1xuICBwcml2YXRlIHNjYWxlWSA9IDA7XG4gIHByaXZhdGUgc2hpZnRYID0gMDtcbiAgcHJpdmF0ZSBzaGlmdFkgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpITtcbiAgfVxuXG4gIHJlZnJlc2gobGV2ZWxOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByZXBhcmUobGV2ZWxOYW1lKTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIHRoaXMucmVuZGVyQmFja2dyb3VuZCgpO1xuICB9XG5cbiAgcmVuZGVySXRlbXMoaXRlbXM6IEl0ZXJhYmxlPGFwcC5jb3JlLkl0ZW0+LCBpdGVtU2V0OiBTZXQ8bnVtYmVyPikge1xuICAgIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgICAgaWYgKCFpdGVtU2V0LmhhcyhpdGVtLmN1c3RvbVNjcmlwdEludC52YWx1ZSkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKGl0ZW0ubG9jYWxPcmlnaW4pO1xuICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyhwb3NpdGlvbi54LCBwb3NpdGlvbi55LCB0aGlzLnNjYWxlUiAqIDQsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9ICcjRkZGJztcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIHJlbmRlclBsYXllcnMobG9jYWxQbGF5ZXI6IGFwcC5jb3JlLlBsYXllciwgcGxheWVyczogSXRlcmFibGU8YXBwLmNvcmUuUGxheWVyPikge1xuICAgIGZvciAoY29uc3QgcGxheWVyIG9mIHBsYXllcnMpIHtcbiAgICAgIGlmICghcGxheWVyLmlzVmFsaWQpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmNhbGN1bGF0ZVBvc2l0aW9uKHBsYXllci5sb2NhbE9yaWdpbik7XG4gICAgICBpZiAocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmNvbnRleHQuYXJjKHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHRoaXMuc2NhbGVSICogOCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gcGxheWVyLmNyZWF0ZUNvbG9yKGxvY2FsUGxheWVyKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZVBvc2l0aW9uKGxvY2FsT3JpZ2luOiBhcHAuY29yZS5WZWN0b3IpIHtcbiAgICBpZiAodGhpcy5tYXApIHtcbiAgICAgIGNvbnN0IHggPSB0aGlzLnNoaWZ0WCArICgxIC8gdGhpcy5pbWFnZS53aWR0aCAqIHRoaXMuc2NhbGVYKSAqIChsb2NhbE9yaWdpbi52YWx1ZS54IC0gdGhpcy5tYXAueCkgLyB0aGlzLnJhdGlvWDtcbiAgICAgIGNvbnN0IHkgPSB0aGlzLnNoaWZ0WSArICgxIC8gdGhpcy5pbWFnZS5oZWlnaHQgKiB0aGlzLnNjYWxlWSkgKiAobG9jYWxPcmlnaW4udmFsdWUueSAtIHRoaXMubWFwLnkpIC8gLXRoaXMucmF0aW9ZO1xuICAgICAgcmV0dXJuIHt4LCB5fTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZShsZXZlbE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMubWFwID0gZ2V0RGF0YUJ5TGV2ZWxOYW1lKGxldmVsTmFtZSk7XG4gICAgdGhpcy5pbWFnZS5zcmMgPSB0aGlzLm1hcCA/IGBpbWFnZXMvbWFwcy8ke2xldmVsTmFtZX0ud2VicGAgOiAnaW1hZ2VzL21hcHMud2VicCc7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckJhY2tncm91bmQoKSB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHRoaXMuaW1hZ2UsIDAsIDAsIHRoaXMuaW1hZ2Uud2lkdGgsIHRoaXMuaW1hZ2UuaGVpZ2h0LCB0aGlzLnNoaWZ0WCwgdGhpcy5zaGlmdFksIHRoaXMuc2NhbGVYLCB0aGlzLnNjYWxlWSk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnJhdGlvWCA9IHRoaXMubWFwID8gKHRoaXMubWFwLnkgLSB0aGlzLm1hcC54KSAvIHRoaXMuaW1hZ2Uud2lkdGggOiAwO1xuICAgIHRoaXMucmF0aW9ZID0gdGhpcy5tYXAgPyAodGhpcy5tYXAueSAtIHRoaXMubWFwLngpIC8gdGhpcy5pbWFnZS5oZWlnaHQgOiAwO1xuICAgIHRoaXMuc2NhbGVSID0gTWF0aC5taW4odGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmltYWdlLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQgLyB0aGlzLmltYWdlLmhlaWdodCk7XG4gICAgdGhpcy5zY2FsZVggPSB0aGlzLmltYWdlLndpZHRoICogdGhpcy5zY2FsZVI7XG4gICAgdGhpcy5zY2FsZVkgPSB0aGlzLmltYWdlLmhlaWdodCAqIHRoaXMuc2NhbGVSO1xuICAgIHRoaXMuc2hpZnRYID0gKHRoaXMuY2FudmFzLndpZHRoIC0gdGhpcy5zY2FsZVgpIC8gMjtcbiAgICB0aGlzLnNoaWZ0WSA9ICh0aGlzLmNhbnZhcy5oZWlnaHQgLSB0aGlzLnNjYWxlWSkgLyAyOyAgXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGF0YUJ5TGV2ZWxOYW1lKGxldmVsTmFtZTogc3RyaW5nKSB7XG4gIHN3aXRjaCAobGV2ZWxOYW1lKSB7XG4gICAgY2FzZSAnbXBfcnJfY2FueW9ubGFuZHNfbXUzJzpcbiAgICAgIHJldHVybiB7eDogLTM3NTQxLCB5OiA0Mzg4Nn07XG4gICAgY2FzZSAnbXBfcnJfZGVzZXJ0bGFuZHNfbXUzJzpcbiAgICAgIHJldHVybiB7eDogLTQ1MDU2LCB5OiA0NTA1NX07XG4gICAgY2FzZSAnbXBfcnJfb2x5bXB1c19tdTInOlxuICAgICAgcmV0dXJuIHt4OiAtNTIwMjQsIHk6IDQ4MDI1fTtcbiAgICBjYXNlICdtcF9ycl90cm9waWNfaXNsYW5kX211MSc6XG4gICAgICByZXR1cm4ge3g6IC01MDYwNiwgeTogNTIxMzl9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==