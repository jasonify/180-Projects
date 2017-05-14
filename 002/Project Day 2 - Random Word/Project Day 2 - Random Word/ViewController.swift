//
//  ViewController.swift
//  Project Day 2 - Random Word
//
//  Created by jason on 5/14/17.
//  Copyright © 2017 jasonify. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var wordLabel: UILabel!

    @IBOutlet weak var shakeLabel: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
 
        
        // iOS Attributed Strings:
        // https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/AttributedStrings/AttributedStrings.html
        
        
        let attributes = [NSStrokeWidthAttributeName: 5.0,
                          NSStrokeColorAttributeName: UIColor.white,
                          NSForegroundColorAttributeName: UIColor.clear] as [String : Any]
        
        shakeLabel.attributedText = NSAttributedString(string: "< SHAKE >", attributes: attributes)
        
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override var prefersStatusBarHidden: Bool {
        return true
    }
    
    
    
    override func motionEnded(_ motion: UIEventSubtype, with event: UIEvent?) {
        if motion == .motionShake {
            wordLabel.text = "Nice!"
        }
    }
    
    


}

