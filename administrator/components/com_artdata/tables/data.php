<?php
/**
 * @version     2.2.9
 * @package     com_artdata
 * @copyright   Copyright (C) 2016. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @author      Mike Hill <info@artetics.com> - http://artetics.com
 */

// no direct access
defined('_JEXEC') or die; 

/**
 * ArtData Datasets Table class
 */
class ArtDataTableData extends JTable {

    var $id = null;
    var $name = null;   
    var $created = null; 
    var $modified = null; 
    var $type = null;
    var $series = null;
    var $content = null;

    /**
     * Constructor
     *
     * @param JDatabase A database connector object
     */
    public function __construct(&$db) {
        parent::__construct('#__artdata_data', 'id', $db);
    }

}
