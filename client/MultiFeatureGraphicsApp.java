import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.io.*;
import javax.imageio.ImageIO;

public class MultiFeatureGraphicsApp extends JPanel {

    Color backgroundColor = Color.WHITE;
    BufferedImage img1, img2, img3;

    public MultiFeatureGraphicsApp() {
        // Load images
        try {
            img1 = ImageIO.read(new File("image1.jpg")); // normal image'
            img2 = ImageIO.read(new File("image2.jpg")); // scaled image
            img3 = ImageIO.read(new File("image3.jpg")); // normal image
        } catch (IOException e) {
            System.out.println("Image load error: " + e.getMessage());
        }

        // Add color chooser button
        JButton colorButton = new JButton("Pick Background Color");
        colorButton.addActionListener(e -> {
            Color selectedColor = JColorChooser.showDialog(null, "Choose Background Color", backgroundColor);
            if (selectedColor != null) {
                backgroundColor = selectedColor;
                repaint(); // redraw with new background
            }
        });

        this.setLayout(new FlowLayout());
        this.add(colorButton);
    }

    @Override
    protected void paintComponent(Graphics g) {
        super.paintComponent(g);

        // Set background
        setBackground(backgroundColor);

        // Draw shapes
        g.setColor(Color.BLACK);
        g.drawLine(20, 100, 120, 100); // Line
        g.drawRect(20, 120, 100, 60); // Rectangle
        g.drawOval(150, 120, 100, 60); // Oval
        g.drawOval(300, 120, 60, 60); // Circle

        // Draw texts with different fonts
        g.setFont(new Font("Serif", Font.BOLD, 20));
        g.drawString("Hello Java", 20, 220);

        g.setFont(new Font("SansSerif", Font.ITALIC, 18));
        g.drawString("Graphics Example", 20, 250);

        g.setFont(new Font("Monospaced", Font.PLAIN, 16));
        g.drawString("Different Fonts", 20, 280);

        g.setFont(new Font("Dialog", Font.BOLD | Font.ITALIC, 18));
        g.drawString("Fun with Swing!", 20, 310);

        // Draw images
        if (img1 != null)
            g.drawImage(img1, 20, 330, this); // Original size
        if (img2 != null)
            g.drawImage(img2, 200, 330, 100, 100, this); // Scaled image
        if (img3 != null)
            g.drawImage(img3, 320, 330, this); // Original size
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Multi-Feature Graphics Example");
        MultiFeatureGraphicsApp panel = new MultiFeatureGraphicsApp();

        frame.setSize(500, 600);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(panel);
        frame.setVisible(true);
    }
}
