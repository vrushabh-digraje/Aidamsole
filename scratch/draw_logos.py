import os
from PIL import Image, ImageDraw, ImageFont

def draw_partner_emblem(draw, x0, y0, size):
    """Draws the official Zoho Partner white rounded square with 4-colored border and blue figures."""
    # Coords of emblem bounding box
    x1 = x0 + size
    y1 = y0 + size
    
    # Draw outer white card with rounded corners
    r = 24
    draw.rounded_rectangle([x0, y0, x1, y1], radius=r, fill="#ffffff")
    
    # Draw four colored border strokes (top=red, right=green, bottom=yellow, left=blue)
    bw = 6 # Border width
    
    # Top border (Red)
    draw.line([x0 + r, y0 + bw//2, x1 - r, y0 + bw//2], fill="#e53935", width=bw)
    draw.arc([x0, y0, x0 + 2*r, y0 + 2*r], start=180, end=270, fill="#e53935", width=bw)
    
    # Right border (Green)
    draw.line([x1 - bw//2, y0 + r, x1 - bw//2, y1 - r], fill="#2d9e47", width=bw)
    draw.arc([x1 - 2*r, y0, x1, y0 + 2*r], start=270, end=360, fill="#2d9e47", width=bw)
    
    # Bottom border (Yellow/Orange)
    draw.line([x0 + r, y1 - bw//2, x1 - r, y1 - bw//2], fill="#f5aa00", width=bw)
    draw.arc([x1 - 2*r, y1 - 2*r, x1, y1], start=0, end=90, fill="#f5aa00", width=bw)
    
    # Left border (Blue)
    draw.line([x0 + bw//2, y0 + r, x0 + bw//2, y1 - r], fill="#185abd", width=bw)
    draw.arc([x0, y1 - 2*r, x0 + 2*r, y1], start=90, end=180, fill="#185abd", width=bw)
    
    # Draw two blue stylized figures holding hands inside the white card
    # Figure Color
    fc = "#0c60a3"
    
    # Draw heads (two circles)
    cx1 = x0 + size // 2 - 18
    cx2 = x0 + size // 2 + 18
    cy = y0 + size // 2 - 16
    hr = 10 # Head radius
    draw.ellipse([cx1 - hr, cy - hr, cx1 + hr, cy + hr], fill=fc)
    draw.ellipse([cx2 - hr, cy - hr, cx2 + hr, cy + hr], fill=fc)
    
    # Draw shoulder arch and arms holding hands
    # Left shoulder & arm
    draw.arc([cx1 - 22, cy + 2, cx1 + 22, cy + 38], start=180, end=360, fill=fc, width=9)
    # Right shoulder & arm
    draw.arc([cx2 - 22, cy + 2, cx2 + 22, cy + 38], start=180, end=360, fill=fc, width=9)
    
    # Handshake linkage line in the middle
    draw.line([cx1 + 8, cy + 20, cx2 - 8, cy + 20], fill=fc, width=9)
    
    # Vertical body pillars
    draw.rounded_rectangle([cx1 - 8, cy + 18, cx1 + 8, cy + 50], radius=5, fill=fc)
    draw.rounded_rectangle([cx2 - 8, cy + 18, cx2 + 8, cy + 50], radius=5, fill=fc)

def generate_authorized_badge(dest_path):
    """Generates the official 'Zoho Authorized Partner' blue badge image."""
    width = 434
    height = 236
    
    # Transparent canvas
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw the white emblem on the left
    emblem_size = 140
    ey = (height - emblem_size) // 2
    ex = 20
    draw_partner_emblem(draw, ex, ey, emblem_size)
    
    # Draw the blue rectangle card on the right
    bx = ex + emblem_size - 4 # Slight overlap
    by = ey
    bw = width - bx - 20
    bh = emblem_size
    br = 20 # rounded corners radius
    
    # Draw blue card (Right side has rounded corners, Left side is flat)
    draw.rounded_rectangle([bx, by, bx + bw, by + bh], radius=br, fill="#1565c0")
    # Draw a flat rectangle over the left edge to keep it straight
    draw.rectangle([bx, by, bx + 16, by + bh], fill="#1565c0")
    
    # Load Segoe UI fonts
    font_path_bold = "C:\\Windows\\Fonts\\segoeuib.ttf"
    font_path_reg = "C:\\Windows\\Fonts\\segoeui.ttf"
    
    if not os.path.exists(font_path_bold):
        font_path_bold = "arial.ttf"
        font_path_reg = "arial.ttf"
        
    try:
        font_zoho = ImageFont.truetype(font_path_bold, 36)
        font_text = ImageFont.truetype(font_path_reg, 21)
    except IOError:
        font_zoho = ImageFont.load_default()
        font_text = ImageFont.load_default()
        
    # Write text in white
    draw.text((bx + 26, by + 16), "Zoho", fill="#ffffff", font=font_zoho)
    draw.text((bx + 26, by + 62), "Authorized", fill="#ffffff", font=font_text)
    draw.text((bx + 26, by + 90), "Partner", fill="#ffffff", font=font_text)
    
    img.save(dest_path, "PNG")
    print(f"Generated authorized partner badge at {dest_path}")

def generate_partner_lockup(dest_path):
    """Generates the 'Zoho Partner' logo wordmark lockup."""
    width = 444
    height = 244
    
    # Transparent canvas
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw the white emblem on the left
    emblem_size = 140
    ey = (height - emblem_size) // 2
    ex = 20
    draw_partner_emblem(draw, ex, ey, emblem_size)
    
    # Load fonts
    font_path_bold = "C:\\Windows\\Fonts\\segoeuib.ttf"
    font_path_reg = "C:\\Windows\\Fonts\\segoeui.ttf"
    
    if not os.path.exists(font_path_bold):
        font_path_bold = "arial.ttf"
        font_path_reg = "arial.ttf"
        
    try:
        font_zoho = ImageFont.truetype(font_path_bold, 44)
        font_partner = ImageFont.truetype(font_path_reg, 44)
    except IOError:
        font_zoho = ImageFont.load_default()
        font_partner = ImageFont.load_default()
        
    # Write text in dark grey
    tx = ex + emblem_size + 24
    draw.text((tx, ey + 18), "Zoho", fill="#111111", font=font_zoho)
    draw.text((tx, ey + 72), "Partner", fill="#111111", font=font_partner)
    
    img.save(dest_path, "PNG")
    print(f"Generated partner lockup at {dest_path}")

if __name__ == "__main__":
    brand_dir = r"F:\aidamsole-platform\aidamsole-platform\public\brand"
    os.makedirs(brand_dir, exist_ok=True)
    
    generate_authorized_badge(os.path.join(brand_dir, "zoho-authorized-partner.png"))
    generate_partner_lockup(os.path.join(brand_dir, "zoho-partner.png"))
