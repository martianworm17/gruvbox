module.exports = function (values) {
  'use strict';

  const c = values.colors;
  const info = values.info;
  const paths = values.paths;
  const stOpts = values.options;

  const spacegrayPath = `${paths.this}spacegray__`;

  return [

    /**
     * Tab Sizes
     */

    // Extra Extra Small Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsXxs],
      'tab_height': 33,
    },

    {
      'class': 'tab_control',
      'settings': [stOpts.tabsXxs],
      'content_margin': [12, 0, 8, 0],
    },

    // Extra Small Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsXs],
      'tab_height': 39,
    },

    {
      'class': 'tab_control',
      'settings': [stOpts.tabsXs],
      'content_margin': [14, 0, 10, 0],
    },

    // Small Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsS],
      'tab_height': 45,
    },

    {
      'class': 'tab_control',
      'settings': [stOpts.tabsS],
      'content_margin': [16, 0, 12, 0],
    },

    // Large Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsL],
      'tab_height': 57,
    },

    {
      'class': 'tab_control',
      'settings': [stOpts.tabsL],
      'content_margin': [16, 0, 12, 0],
    },

    // Extra Large Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsXl],
      'tab_height': 63,
    },

    {
      'class': 'tab_control',
      'settings': [stOpts.tabsXl],
      'content_margin': [18, 0, 14, 0],
    },

    // Extra Extra Large Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsXxl],
      'tab_height': 69,
    },

    {
      'class': 'tab_control',
      'settings': [stOpts.tabsXxl],
      'content_margin': [20, 0, 16, 0],
    },

    /**
     * Autowidth Tabs
     */

    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsAutowidth],
      'tab_width': 0,
    },

    /**
     * Bold Tabs
     */

    {
      'class': 'tab_label',
      'settings': [stOpts.tabsBold],
      'font.bold': true,
    },

    /**
     * Tab Font Sizes
     */

    // Extra Extra Extra Small
    {
      'class': 'tab_label',
      'settings': [stOpts.tabsFontSizeXxxs],
      'font.size': 7,
    },

    // Extra Extra Small
    {
      'class': 'tab_label',
      'settings': [stOpts.tabsFontSizeXxs],
      'font.size': 8,
    },

    // Extra Small
    {
      'class': 'tab_label',
      'settings': [stOpts.tabsFontSizeXs],
      'font.size': 9,
    },

    // Small
    {
      'class': 'tab_label',
      'settings': [stOpts.tabsFontSizeS],
      'font.size': 10,
    },

    // Large
    {
      'class': 'tab_label',
      'settings': [stOpts.tabsFontSizeL],
      'font.size': 12,
    },

    // Extra Large
    {
      'class': 'tab_label',
      'settings': [stOpts.tabsFontSizeXl],
      'font.size': 13,
    },

    // Extra Extra Large
    {
      'class': 'tab_label',
      'settings': [stOpts.tabsFontSizeXxl],
      'font.size': 14,
    },

    // Extra Extra Extra Large
    {
      'class': 'tab_label',
      'settings': [stOpts.tabsFontSizeXxxl],
      'font.size': 15,
    },

    /**
     * Hide Sidebar File-Type Icons
     */

    {
      'class': 'icon_file_type',
      'settings': [stOpts.disableFileIcons],
      'content_margin': [0, 0],

      'layer0.opacity': 0,
    },

    /**
     * Status Bar Size Options
     */

    // Extra Extra Small Status Bar
    {
      'class': 'status_container',
      'settings': [stOpts.statusbarXxs],
      'content_margin': [12, 3, 12, 3],
    },

    // Extra Small Status Bar
    {
      'class': 'status_container',
      'settings': [stOpts.statusbarXs],
      'content_margin': [12, 6, 12, 6],
    },

    // Small Status Bar
    {
      'class': 'status_container',
      'settings': [stOpts.statusbarS],
      'content_margin': [12, 8, 12, 8],
    },

    // Large Status Bar
    {
      'class': 'status_container',
      'settings': [stOpts.statusbarL],
      'content_margin': [12, 13, 12, 13],
    },

    // Extra Large Status Bar
    {
      'class': 'status_container',
      'settings': [stOpts.statusbarXl],
      'content_margin': [12, 16, 12, 16],
    },

    // Extra Extra Large Status Bar
    {
      'class': 'status_container',
      'settings': [stOpts.statusbarXxl],
      'content_margin': [12, 18, 12, 18],
    },

    /**
     * Sidebar Padding
     */

    // Cramped Sidebar
    {
      'class': 'sidebar_tree',
      'settings': [stOpts.sidebarSpacingXs],
      'row_padding': [24, 1],
    },

    // Compact Sidebar
    {
      'class': 'sidebar_tree',
      'settings': [stOpts.sidebarSpacingS],
      'row_padding': [24, 3],
    },

    // Comfortable Sidebar
    {
      'class': 'sidebar_tree',
      'settings': [stOpts.sidebarSpacingL],
      'row_padding': [24, 7],
    },

    // Cozy Sidebar
    {
      'class': 'sidebar_tree',
      'settings': [stOpts.sidebarSpacingXl],
      'row_padding': [24, 9],
    },

    /**
     * Hide Sidebar Folder Icons
     */
    {
      'class': 'icon_folder',
      'settings': [stOpts.disableFolderIcons],

      'content_margin': [0, 0],
    },

    // Folder Loading
    {
      'class': 'icon_folder_loading',
      'settings': [stOpts.disableFolderIcons],

      'content_margin': [0, 0],
    },

    // Symlinked Folder
    {
      'class': 'icon_folder_dup',
      'settings': [stOpts.disableFolderIcons],

      'content_margin': [0, 0],
    },

    /**
     * AutoComplete Padding
     */

    // Cramped AutoComplete
    {
      'class': 'auto_complete',
      'settings': [stOpts.autocompleteSpacingXs],
      'row_padding': [12, 2],
    },

    // Compact AutoComplete
    {
      'class': 'auto_complete',
      'settings': [stOpts.autocompleteSpacingS],
      'row_padding': [12, 4],
    },

    // Comfortable AutoComplete
    {
      'class': 'auto_complete',
      'settings': [stOpts.autocompleteSpacingL],
      'row_padding': [12, 8],
    },

    // Cozy AutoComplete
    {
      'class': 'auto_complete',
      'settings': [stOpts.autocompleteSpacingXl],
      'row_padding': [12, 10],
    },

    /**
     * Enable Status Bar Close Button
     */
    {
      'class': 'panel_close_button',
      'settings': [stOpts.enablePanelCloseButton],
      'content_margin': [8, 8],
    },

    /**
     * Disable Borders
     */

    // Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.disableBorders],
      'content_margin': [0, 0, 12, 0],

      'layer1.opacity': 0,
    },

    {
      'class': 'tab_control',
      'settings': [stOpts.disableBorders],

      'layer2.opacity': 0,
    },

    {
      'class': 'tab_control',
      'settings': [stOpts.disableBorders],
      'attributes': ['selected'],

      'layer1.opacity': 0,
      'layer2.opacity': 0,
    },

    // Sidebar
    {
      'class': 'sidebar_container',
      'settings': [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    {
      'class': 'sidebar_tree',
      'settings': [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    {
      'class': 'tree_row',
      'settings': [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    // Scrollbars
    {
      'class': 'scroll_bar_control',
      'settings': [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    {
      'class': 'scroll_corner_control',
      'settings': [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    // Status Bar
    {
      'class': 'status_bar',
      'settings': [stOpts.disableBorders],

      'layer2.opacity': 0,
    },

    {
      'class': 'panel_control',
      'settings': [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    // Command Palette
    {
      'class': 'overlay_control',
      'settings': [stOpts.disableBorders],
      'content_margin': [0, 14, 0, 0],

      'layer1.opacity': 0,
    },

    {
      'class': 'mini_quick_panel_row',
      'settings': [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    {
      'class': 'quick_panel_row',
      'settings': [stOpts.disableBorders],

      'layer1.opacity': 0,
    },

    /**
     * Enable Statusbar Border
     */

    {
      'class': 'status_bar',
      'settings': [stOpts.enableStatusbarBorder],

      'layer2.opacity': 1,
    },

    {
      'class': 'panel_control',
      'settings': [stOpts.enableStatusbarBorder],

      'layer1.opacity': 1,
    },

    /**
     * Spacegray Iconset
     */

    // Folder Icon
    {
      'class': 'icon_folder',
      'settings': [stOpts.iconsetSpacegray],

      'layer1.texture': `${paths.commons}spacegray__folder.png`, // Default
      'layer2.texture': `${paths.this}spacegray__folder--hover.png`, // Hover
      'layer3.texture': `${paths.this}spacegray__folder--expanded.png`, // Expanded
    },

    // Symlinked Folder Icon
    {
      'class': 'icon_folder_dup',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${paths.commons}spacegray__folder_dup.png`, // Default
      'layer1.texture': `${paths.this}spacegray__folder_dup--hover.png`, // Hover
      'layer2.texture': `${paths.this}spacegray__folder_dup--expanded.png`, // Expanded
    },

    // Regex Icon
    {
      'class': 'icon_regex',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}regex.png`, // Default
      'layer1.texture': `${spacegrayPath}regex--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}regex--selected.png`, // Selected
    },

    // Case Sensitive
    {
      'class': 'icon_case',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}casesensitive.png`, // Default
      'layer1.texture': `${spacegrayPath}casesensitive--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}casesensitive--selected.png`, // Selected
    },

    // Wholeword
    {
      'class': 'icon_whole_word',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}wholeword.png`, // Default
      'layer1.texture': `${spacegrayPath}wholeword--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}wholeword--selected.png`, // Selected
    },

    // Wrap
    {
      'class': 'icon_wrap',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}wrap.png`, // Default
      'layer1.texture': `${spacegrayPath}wrap--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}wrap--selected.png`, // Selected
    },

    // In selection
    {
      'class': 'icon_in_selection',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}inselection.png`, // Default
      'layer1.texture': `${spacegrayPath}inselection--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}inselection--selected.png`, // Selected
    },

    // Highlight Result
    {
      'class': 'icon_highlight',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}highlight.png`, // Default
      'layer1.texture': `${spacegrayPath}highlight--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}highlight--selected.png`, // Selected
    },

    // Preserve Case
    {
      'class': 'icon_preserve_case',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}preservecase.png`, // Default
      'layer1.texture': `${spacegrayPath}preservecase--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}preservecase--selected.png`, // Selected
    },

    // Show context
    {
      'class': 'icon_context',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}context.png`, // Default
      'layer1.texture': `${spacegrayPath}context--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}context--selected.png`, // Selected
    },

    // Use buffer
    {
      'class': 'icon_use_buffer',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}buffer.png`, // Default
      'layer1.texture': `${spacegrayPath}buffer--hover.png`, // Hover
      'layer2.texture': `${spacegrayPath}buffer--selected.png`, // Selected
    },

    // Panel Switcher
    {
      'class': 'panel_button_control',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}panels.png`, // Default
      'layer1.texture': `${spacegrayPath}panels--hover.png`, // Hover
    },

    // Textline Input Overflow Menu
    {
      'class': 'dropdown_button_control',
      'settings': [stOpts.iconsetSpacegray],

      'layer0.texture': `${spacegrayPath}more.png`, // Default
      'layer1.texture': `${spacegrayPath}more--hover.png`, // Hover
    },

    /**
     * Autocollapsing Tabs
     */
    {
      'class': 'tabset_control',
      'settings': [stOpts.autocollapseTabs],

      'content_margin': [-1, 4, 12, 0],
      'tab_height': 0,
    },

    // Trigger Sizes
    {
      'class': 'tabset_control',
      'settings': [stOpts.autocollapseTabs, stOpts.autocollapseTabsTriggerXs],

      'content_margin': [-1, 2, 12, 0],
    },

    {
      'class': 'tabset_control',
      'settings': [stOpts.autocollapseTabs, stOpts.autocollapseTabsTriggerS],

      'content_margin': [-1, 3, 12, 0],
    },

    {
      'class': 'tabset_control',
      'settings': [stOpts.autocollapseTabs, stOpts.autocollapseTabsTriggerL],

      'content_margin': [-1, 5, 12, 0],
    },

    {
      'class': 'tabset_control',
      'settings': [stOpts.autocollapseTabs, stOpts.autocollapseTabsTriggerXl],

      'content_margin': [-1, 6, 12, 0],
    },

    // Autocollapse Hover
    {
      'class': 'tabset_control',
      'settings': [stOpts.autocollapseTabs],
      'attributes': ['hover'],

      'content_margin': [-1, 0, 12, 0],
    },

    // Default Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.autocollapseTabs],
      'attributes': ['hover'],

      'tab_height': 51,
    },

    // Extra Extra Small Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsXxs, stOpts.autocollapseTabs],
      'attributes': ['hover'],
      'tab_height': 33,
    },

    // Extra Small Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsXs, stOpts.autocollapseTabs],
      'attributes': ['hover'],
      'tab_height': 39,
    },

    // Small Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsS, stOpts.autocollapseTabs],
      'attributes': ['hover'],
      'tab_height': 45,
    },

    // Large Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsL, stOpts.autocollapseTabs],
      'attributes': ['hover'],
      'tab_height': 57,
    },

    // Extra Large Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsXl, stOpts.autocollapseTabs],
      'attributes': ['hover'],
      'tab_height': 63,
    },

    // Extra Extra Large Tabs
    {
      'class': 'tabset_control',
      'settings': [stOpts.tabsXxl, stOpts.autocollapseTabs],
      'attributes': ['hover'],
      'tab_height': 69,
    },

    // Tab Scroll Left Button
    {
      'class': 'scroll_tabs_left_button',
      'settings': [stOpts.autocollapseTabs],

      'content_margin': [0, 0],
    },

    // Tab Scroll Left Button Hover
    {
      'class': 'scroll_tabs_left_button',
      'settings': [stOpts.autocollapseTabs],
      'parents': [

        {
          'class': 'tabset_control',
          'attributes': ['hover'],
        },

      ],

      'content_margin': [14, 7],
    },

    // Tab Scroll Right Button
    {
      'class': 'scroll_tabs_right_button',
      'settings': [stOpts.autocollapseTabs],

      'content_margin': [0, 0],
    },

    // Tab Scroll Right Button Hover
    {
      'class': 'scroll_tabs_right_button',
      'settings': [stOpts.autocollapseTabs],
      'parents': [

        {
          'class': 'tabset_control',
          'attributes': ['hover'],
        },

      ],

      'content_margin': [14, 7],
    },

    // Tab Scroll Overflow Menu Button
    {
      'class': 'show_tabs_dropdown_button',
      'settings': [stOpts.autocollapseTabs],

      'content_margin': [0, 0],
    },

    // Tab Scroll Overflow Menu Button Hover
    {
      'class': 'show_tabs_dropdown_button',
      'settings': [stOpts.autocollapseTabs],
      'parents': [

        {
          'class': 'tabset_control',
          'attributes': ['hover'],
        },

      ],

      'content_margin': [12, 12],
    },

    /**
     * Disable Panel Switcher
     */

    {
      'class': 'panel_button_control',
      'settings': [stOpts.disablePanelsButton],
      'content_margin': [0, 0],
    },

    /**
     * Disable Faded File Icons
     */

    {
      'class': 'icon_file_type',
      'settings': [stOpts.disableFadedFileIcons],

      'layer0.opacity': 1,
    },

    /**
     * Disable Greyscale Colors
     */

    // Button labels
    {
      'class': 'label_control',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'button_control',
        },

      ],

      'color': c.bnp.fg[info.contrast],
    },

    // All labels
    {
      'class': 'label_control',
      'settings': [stOpts.disableGreyscaleColors],

      'color': c.bnp.fg3,
    },

    // Status bar labels
    {
      'class': 'label_control',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'status_bar',
        },

      ],

      'color': c.bnp.fg3,
    },

    {
      'class': 'status_button',
      'settings': [stOpts.disableGreyscaleColors],

      'layer0.tint': c.bnp.bg1,
    },

    {
      'class': 'label_control',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'status_button',
          'attributes': ['hover'],
        },

      ],

      'color': c.bnp.fg1,
    },

    // Sidebar
    {
      'class': 'sidebar_heading',
      'settings': [stOpts.disableGreyscaleColors],

      'color': c.bnp.fg1,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.disableGreyscaleColors],

      'color': c.bnp.gray,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['hover'],
        },

      ],

      'color': c.bnp.fg1,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['selected'],
        },

      ],

      'color': c.bnp.fg1,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expandable'],
        },

      ],

      'color': c.bnp.fg4,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded'],
        },

      ],

      'color': c.bnp.fg1,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['hover'],
        },

      ],

      'color': c.bnp.fg1,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tree_row',
          'attributes': ['expanded', 'selected'],
        },

      ],

      'color': c.bnp.fg1,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.disableGreyscaleColors],
      'attributes': ['transient'],

      'color': c.bnp.fg1,
    },

    // Tab Label
    {
      'class': 'tab_label',
      'settings': [stOpts.disableGreyscaleColors],

      'fg': c.bnp.gray,
    },

    // Selected Tab Tab Label
    {
      'class': 'tab_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tab_control',
          'attributes': ['selected'],
        },

      ],

      'fg': c.bnp.fg2,
    },

    // Hovered Tab Tab Label
    {
      'class': 'tab_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tab_control',
          'attributes': ['hover'],
        },

      ],

      'fg': c.bnp.fg3,
    },

    // Selected & Hovered Tab Tab Label
    {
      'class': 'tab_label',
      'settings': [stOpts.disableGreyscaleColors],

      'parents': [

        {
          'class': 'tab_control',
          'attributes': ['selected', 'hover'],
        },

      ],

      'fg': c.bnp.fg2,
    },

    // Panel labels
    {
      'class': 'quick_panel_label',
      'settings': [stOpts.disableGreyscaleColors],

      'fg': c.bnp.fg4,
      'match_fg': c.bnp.fg1,
      'selected_fg': c.bnp.fg4,
      'selected_match_fg': c.bnp.fg1,
    },

    // Panel labels
    {
      'class': 'quick_panel_label',
      'settings': [stOpts.disableGreyscaleColors],
      'parents': [

        {
          'class': 'overlay_control',
        },

      ],

      'fg': c.bnp.fg4,
      'match_fg': c.bnp.fg1,
      'selected_fg': c.bnp.fg4,
      'selected_match_fg': c.bnp.fg1,
    },

    // Panels sublabels
    {
      'class': 'quick_panel_path_label',
      'settings': [stOpts.disableGreyscaleColors],

      'fg': c.bnp.fg4,
      'match_fg': c.bnp.fg1,
      'selected_fg': c.bnp.fg4,
      'selected_match_fg': c.bnp.fg1,
    },

    // Panels data / score
    {
      'class': 'quick_panel_score_label',
      'settings': [stOpts.disableGreyscaleColors],

      'fg': c.bnp.fg4,
      'selected_fg': c.bnp.fg1,
    },

    // Autocomplete
    {
      'class': 'auto_complete_label',
      'settings': [stOpts.disableGreyscaleColors],

      'fg': c.bnp.fg4,
      'match_fg': c.bnp.fg1,
      'selected_fg': c.bnp.fg4,
      'selected_match_fg': c.bnp.fg1,
    },

    /**
     * Square Folder Icons
     */

    {
      'class': 'icon_folder',
      'settings': [stOpts.enableSquareFolderIcons],

      'layer1.texture': `${paths.commons}folder__square.png`,
      'layer2.texture': `${paths.this}folder__square--expanded.png`,
      'layer3.texture': `${paths.this}folder__square--expanded.png`,
    },

    // Symlinked
    {
      'class': 'icon_folder_dup',
      'settings': [stOpts.enableSquareFolderIcons],

      'layer0.texture': `${paths.commons}folder__square_dup.png`,
      'layer1.texture': `${paths.this}folder__square_dup--expanded.png`,
      'layer2.texture': `${paths.this}folder__square_dup--expanded.png`,
    },

    /**
     * Literal Folder Icons
     */

    {
      'class': 'icon_folder',
      'settings': [stOpts.enableLiteralFolderIcons],

      'layer1.texture': `${paths.commons}folder__literal.png`,
      'layer2.texture': `${paths.this}folder__literal--hover.png`,
      'layer3.texture': `${paths.this}folder__literal--expanded.png`,
    },

    // Symlinked
    {
      'class': 'icon_folder_dup',
      'settings': [stOpts.enableLiteralFolderIcons],

      'layer0.texture': `${paths.commons}folder__literal_dup.png`,
      'layer1.texture': `${paths.this}folder__literal_dup--hover.png`,
      'layer2.texture': `${paths.this}folder__literal_dup--expanded.png`,
    },

    /**
     * Plus Minus Folder Icons
     */

    {
      'class': 'icon_folder',
      'settings': [stOpts.enablePlusMinusFolderIcons],

      'layer1.texture': `${paths.commons}folder__pm.png`,
      'layer2.texture': `${paths.this}folder__pm--hover.png`,
      'layer3.texture': `${paths.this}folder__pm--expanded.png`,
    },

    // Symlinked
    {
      'class': 'icon_folder_dup',
      'settings': [stOpts.enablePlusMinusFolderIcons],

      'layer0.texture': `${paths.commons}folder__pm_dup.png`,
      'layer1.texture': `${paths.this}folder__pm_dup--hover.png`,
      'layer2.texture': `${paths.this}folder__pm_dup--expanded.png`,
    },

    /**
     * Sidebar Font Sizes
     */

    {
      'class': 'sidebar_heading',
      'settings': [stOpts.sidebarFontSizeXxs],

      'font.size': 11,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.sidebarFontSizeXxs],

      'font.size': 10,
    },

    {
      'class': 'sidebar_heading',
      'settings': [stOpts.sidebarFontSizeXs],

      'font.size': 13,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.sidebarFontSizeXs],

      'font.size': 12,
    },

    {
      'class': 'sidebar_heading',
      'settings': [stOpts.sidebarFontSizeS],

      'font.size': 14,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.sidebarFontSizeS],

      'font.size': 13,
    },

    {
      'class': 'sidebar_heading',
      'settings': [stOpts.sidebarFontSizeL],

      'font.size': 15,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.sidebarFontSizeL],

      'font.size': 14,
    },

    {
      'class': 'sidebar_heading',
      'settings': [stOpts.sidebarFontSizeXl],

      'font.size': 16,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.sidebarFontSizeXl],

      'font.size': 15,
    },

    {
      'class': 'sidebar_heading',
      'settings': [stOpts.sidebarFontSizeXxl],

      'font.size': 17,
    },

    {
      'class': 'sidebar_label',
      'settings': [stOpts.sidebarFontSizeXxl],

      'font.size': 16,
    },

    /**
     * Highlight Active Tree Row
     */

    {
      'class': 'tree_row',
      'settings': [stOpts.enableTreeRowHighlight],

      'attributes': ['selected'],

      'layer0.opacity': 1,
    },

  ];
};