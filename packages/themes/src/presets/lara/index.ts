import type { Preset } from '@wawjs/css-prime-themes/types';
import type { LaraBaseDesignTokens } from './base/index.d';

import accordion from '@wawjs/css-prime-themes/lara/accordion';
import autocomplete from '@wawjs/css-prime-themes/lara/autocomplete';
import avatar from '@wawjs/css-prime-themes/lara/avatar';
import badge from '@wawjs/css-prime-themes/lara/badge';
import base from '@wawjs/css-prime-themes/lara/base';
import blockui from '@wawjs/css-prime-themes/lara/blockui';
import breadcrumb from '@wawjs/css-prime-themes/lara/breadcrumb';
import button from '@wawjs/css-prime-themes/lara/button';
import card from '@wawjs/css-prime-themes/lara/card';
import carousel from '@wawjs/css-prime-themes/lara/carousel';
import cascadeselect from '@wawjs/css-prime-themes/lara/cascadeselect';
import checkbox from '@wawjs/css-prime-themes/lara/checkbox';
import chip from '@wawjs/css-prime-themes/lara/chip';
import colorpicker from '@wawjs/css-prime-themes/lara/colorpicker';
import confirmdialog from '@wawjs/css-prime-themes/lara/confirmdialog';
import confirmpopup from '@wawjs/css-prime-themes/lara/confirmpopup';
import contextmenu from '@wawjs/css-prime-themes/lara/contextmenu';
import datatable from '@wawjs/css-prime-themes/lara/datatable';
import dataview from '@wawjs/css-prime-themes/lara/dataview';
import datepicker from '@wawjs/css-prime-themes/lara/datepicker';
import dialog from '@wawjs/css-prime-themes/lara/dialog';
import divider from '@wawjs/css-prime-themes/lara/divider';
import dock from '@wawjs/css-prime-themes/lara/dock';
import drawer from '@wawjs/css-prime-themes/lara/drawer';
import editor from '@wawjs/css-prime-themes/lara/editor';
import fieldset from '@wawjs/css-prime-themes/lara/fieldset';
import fileupload from '@wawjs/css-prime-themes/lara/fileupload';
import floatlabel from '@wawjs/css-prime-themes/lara/floatlabel';
import galleria from '@wawjs/css-prime-themes/lara/galleria';
import iconfield from '@wawjs/css-prime-themes/lara/iconfield';
import iftalabel from '@wawjs/css-prime-themes/lara/iftalabel';
import image from '@wawjs/css-prime-themes/lara/image';
import imagecompare from '@wawjs/css-prime-themes/lara/imagecompare';
import inlinemessage from '@wawjs/css-prime-themes/lara/inlinemessage';
import inplace from '@wawjs/css-prime-themes/lara/inplace';
import inputchips from '@wawjs/css-prime-themes/lara/inputchips';
import inputgroup from '@wawjs/css-prime-themes/lara/inputgroup';
import inputnumber from '@wawjs/css-prime-themes/lara/inputnumber';
import inputotp from '@wawjs/css-prime-themes/lara/inputotp';
import inputtext from '@wawjs/css-prime-themes/lara/inputtext';
import knob from '@wawjs/css-prime-themes/lara/knob';
import listbox from '@wawjs/css-prime-themes/lara/listbox';
import megamenu from '@wawjs/css-prime-themes/lara/megamenu';
import menu from '@wawjs/css-prime-themes/lara/menu';
import menubar from '@wawjs/css-prime-themes/lara/menubar';
import message from '@wawjs/css-prime-themes/lara/message';
import metergroup from '@wawjs/css-prime-themes/lara/metergroup';
import multiselect from '@wawjs/css-prime-themes/lara/multiselect';
import orderlist from '@wawjs/css-prime-themes/lara/orderlist';
import organizationchart from '@wawjs/css-prime-themes/lara/organizationchart';
import overlaybadge from '@wawjs/css-prime-themes/lara/overlaybadge';
import paginator from '@wawjs/css-prime-themes/lara/paginator';
import panel from '@wawjs/css-prime-themes/lara/panel';
import panelmenu from '@wawjs/css-prime-themes/lara/panelmenu';
import password from '@wawjs/css-prime-themes/lara/password';
import picklist from '@wawjs/css-prime-themes/lara/picklist';
import popover from '@wawjs/css-prime-themes/lara/popover';
import progressbar from '@wawjs/css-prime-themes/lara/progressbar';
import progressspinner from '@wawjs/css-prime-themes/lara/progressspinner';
import radiobutton from '@wawjs/css-prime-themes/lara/radiobutton';
import rating from '@wawjs/css-prime-themes/lara/rating';
import ripple from '@wawjs/css-prime-themes/lara/ripple';
import scrollpanel from '@wawjs/css-prime-themes/lara/scrollpanel';
import select from '@wawjs/css-prime-themes/lara/select';
import selectbutton from '@wawjs/css-prime-themes/lara/selectbutton';
import skeleton from '@wawjs/css-prime-themes/lara/skeleton';
import slider from '@wawjs/css-prime-themes/lara/slider';
import speeddial from '@wawjs/css-prime-themes/lara/speeddial';
import splitbutton from '@wawjs/css-prime-themes/lara/splitbutton';
import splitter from '@wawjs/css-prime-themes/lara/splitter';
import stepper from '@wawjs/css-prime-themes/lara/stepper';
import steps from '@wawjs/css-prime-themes/lara/steps';
import tabmenu from '@wawjs/css-prime-themes/lara/tabmenu';
import tabs from '@wawjs/css-prime-themes/lara/tabs';
import tabview from '@wawjs/css-prime-themes/lara/tabview';
import tag from '@wawjs/css-prime-themes/lara/tag';
import terminal from '@wawjs/css-prime-themes/lara/terminal';
import textarea from '@wawjs/css-prime-themes/lara/textarea';
import tieredmenu from '@wawjs/css-prime-themes/lara/tieredmenu';
import timeline from '@wawjs/css-prime-themes/lara/timeline';
import toast from '@wawjs/css-prime-themes/lara/toast';
import togglebutton from '@wawjs/css-prime-themes/lara/togglebutton';
import toggleswitch from '@wawjs/css-prime-themes/lara/toggleswitch';
import toolbar from '@wawjs/css-prime-themes/lara/toolbar';
import tooltip from '@wawjs/css-prime-themes/lara/tooltip';
import tree from '@wawjs/css-prime-themes/lara/tree';
import treeselect from '@wawjs/css-prime-themes/lara/treeselect';
import treetable from '@wawjs/css-prime-themes/lara/treetable';
import virtualscroller from '@wawjs/css-prime-themes/lara/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        datepicker,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        dataview,
        datatable,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        iftalabel,
        floatlabel,
        galleria,
        iconfield,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        popover,
        paginator,
        password,
        panel,
        panelmenu,
        picklist,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitter,
        splitbutton,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        textarea,
        tieredmenu,
        tag,
        terminal,
        timeline,
        togglebutton,
        toggleswitch,
        tree,
        treeselect,
        treetable,
        toast,
        toolbar,
        tooltip,
        virtualscroller
    }
} satisfies Preset<LaraBaseDesignTokens>;
